---
title: 'Dependency injected objects are closures'
date: 2019-03-13
tags: ['C#', 'functional']
ast: true
---

In C# when using dependency injection in a stateless object, we are effectively mimicking closures. Let's look at an example - we need to use the following interface:

```csharp
public interface IMessageQuery
{
    string Read(int id);
}
```

One implementation can be using the file store:

```csharp
public class FileStore : IMessageQuery
{
    private readonly DirectoryInfo workingDirectory;

    public FileStore(DirectoryInfo workingDirectory)
    {
        this.workingDirectory = workingDirectory;
    }

    public string Read(int id)
    {
        var path = Path.Combine(
            this.workingDirectory.FullName, $"{id}.txt");
        return File.ReadAllText(path);
    }
}
```

This class is stateless and has only one method. We can rewrite it as a function that receives a union of constructor and method parameters:

```csharp
Func<DirectoryInfo, int, string> read =
    (workingDirectory, id) =>
    {
        var path = Path.Combine(workingDirectory.FullName, $"{id}.txt");
        return File.ReadAllText(path);
    };
```

If we extract `workingDirectory` outside and _close_ over it, we get the following version:

```csharp
DirectoryInfo root = new DirectoryInfo(Directory.GetCurrentDirectory());

Func<int, string> messageQuery =
    (id) =>
    {
        var path = Path.Combine(root.FullName, $"{id}.txt");
        return File.ReadAllText(path);
    };
```

Now the signature looks exactly like the original `IMessageQuery` interface! We could actually use partial application to make it a little bit more proper:

```csharp
DirectoryInfo root = new DirectoryInfo(Directory.GetCurrentDirectory());

Func<int, string> messageQuery2 = id => read(root, id);
```

It is obvious that `read` function is a lambda while the latter two wrappers around it are closures. And going back to the beginning we can see that `messageQuery2` really looks like `IMessageQuery`

```csharp
Func<int, string> messageQuery2 = /* ... */

public interface IMessageQuery
{
    string Read(int id);
}
```

The consumer code doesn't change much:

```csharp
void Consumer1(IMessageQuery mq, int id)
{
    var data = mq.Read(id);
}

void Consumer2(Func<int, string> mq, int id)
{
    var data = mq(id);
}
```

We can always use `delegate` instead of `System.Func` and `System.Action` to make things more obvious.

## Some comments

> But my objects have more than one method!

If the methods are unrelated in functionality i.e. they don't call each other or share state, then the class is merely an organizational structure. In C# we have namespaces for that. Also, the consumer of such objects might not use all its methods which means it is a good candidate for splitting up.

> Union of constructor and method parameters is huge!

You shouldn't use too many parameters in constructor to begin with! Also, being able to see all dependencies for the internal method operation is useful. When using containers the tree of dependencies is hidden away which is both a good thing and a bad thing.

## What does it all mean?

If the class is stateless i.e. it all public methods merely operate on parameters and constructor injected objects, that class can be refactored to a closure. The obvious gain of using the former approach is using dependency injection globally - functions are harder to register and inject on demand.

If we go all the way and refactor _all_ our classes to closures, the lack of proper container means our composition root must do all the work! But as Greg Young points out in his keynote [8 lines of code](https://www.infoq.com/presentations/8-lines-code-refactoring), sometimes you _want_ to feel the pain of composing your program. If the pain is too great, maybe you will simplify your codebase.
