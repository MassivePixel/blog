import React from 'react';
import { SocialIcon } from 'react-social-icons';

import me from './me.png';
import './bio.css';
import Layout from './layout';

class Bio extends React.Component {
  render() {
    return (
      <div className="bio">
        <h1>Toni Petrina</h1>
        <p>
          <img src={me} alt="" />
          Speaker, blogger, developer, Microsoft MVP for C# and all-around
          technology enthusiast. Daily chores involve working on Xamarin apps
          and full stack apps. He spends most of the time at the keyboard typing
          yet another demo or application. If you take his keyboard away from
          him, he will talk endlessly about code...and functional programming.
          Been coding for over a decade to know if something is a programming
          fad or not. And no, functional programming is not a fad at all. Strong
          proponent of Open Source and all things chocolate. Loves mobile and
          game development, web and cloud services. Too little time for too many
          things. Especially for funct.....never mind!
        </p>
        <h2>Links</h2>
        <SocialIcon url="https://github.com/tpetrina" />
        <SocialIcon url="https://twitter.com/to_pe" />
        <SocialIcon url="https://www.linkedin.com/in/tonipetrina" />
        <SocialIcon url="https://stackoverflow.com/users/671469/toni-petrina" />
        <h2>Projects</h2>

        <ul>
          <li>
            <a href="https://github.com/massivepixel/yaxl.redux">
              YAXL.Redux - C# port of Reduxjs
            </a>
          </li>
          <li>
            <a href="http://kzplayer.azurewebsites.net/">
              KZ Demo player with three.js
            </a>
          </li>
        </ul>

        <h2>Youtube</h2>
        <iframe
          width="177"
          height="100"
          src="https://www.youtube.com/embed/YJ1jwbBvEfE"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        />
        <iframe
          width="177"
          height="100"
          src="https://www.youtube.com/embed/vTEIgJFUhqY"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        />
        <iframe
          width="177"
          height="100"
          src="https://www.youtube.com/embed/efxWL6pKmK0"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        />
      </div>
    );
  }
}

export default function(props) {
  return (
    <Layout>
      <Bio />
    </Layout>
  );
}
