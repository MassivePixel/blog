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

        <h2>Hi, I am Toni and welcome to my blog/scratchpad.</h2>
        <p>
          <img src={me} alt="" />
          What do I do? I write code and tech lead @ [Visma
          e-conomic](https://e-conomic.dk).
        </p>

        <div style={{ clear: 'both' }}></div>

        <h2>Links</h2>
        <SocialIcon url="https://github.com/tpetrina" />
        <SocialIcon url="https://twitter.com/tonipetrina1" />
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
