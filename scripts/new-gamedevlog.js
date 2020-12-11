const fs = require('fs');

const now = new Date();
const slugDate = `${now.getFullYear()}-${(now.getMonth() + 1)
  .toString()
  .padStart(2, '0')}-${now
  .getDate()
  .toString()
  .padStart(2, '0')}`;
console.log(slugDate);

const slug = process.argv[2].toLowerCase().replace(' ', '-');

fs.writeFileSync(
  `src/pages/${slugDate}-${slug}.md`,
  `---
title: 'Game DevLog: '
date: ${slugDate}
tags: ['gamedev']
ast: false
---
`
);
