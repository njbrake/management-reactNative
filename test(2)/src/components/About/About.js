import React from 'react';
import './About.css';
import {Github} from './Github';
import {Instagram} from './Instagram';
import {Linkedin} from './Linkedin';
import {Youtube} from './Youtube';
import face from './face.jpg';
import ScrollableAnchor from 'react-scrollable-anchor';


export class About extends React.Component {
  render() {
    return(
      <ScrollableAnchor id={'about'}>
      <div>
      <section>
        <h3>
          About Me
        </h3>
        <div className="face-img">
          <img src={face} alt="Face"/>
        </div>
        <div className="icons">
          <a href="https://github.com/njbrake" className="icon-1">
            <Github />
          </a>
          <a href="https://www.instagram.com/njbrake/" className="icon-2">
            <Instagram />
          </a>
          <a href="https://www.linkedin.com/in/nathan-brake-6747b564/"className="icon-3">
            <Linkedin />
          </a>
          <a href="https://www.youtube.com/channel/UCKWAbj-8U6WNcJckYA52z9A?view_as=subscriber" className="icon-4">
            <Youtube />
          </a>
        </div>
        <div className="blurb">
          <p>
            Thanks for visiting! When I graduated in 2015 with a B.S. in Electrical Enginnering, I wasn't sure what to do with such a broad degree.
            After a few years of working in the nuclear power industry, I've discovered my true passion in engineering: software.
            My <a href="https://github.com/njbrake" rel="noopener noreferrer" target="_blank">Github</a> account contains the source code to my latest work.
            Lately Ive been focused on development using the ReactJs framework to build progressive web applications.
          </p><br/>
          <p>
            Some of my other hobbies include <a href="https://www.instagram.com/njbrake/" rel="noopener noreferrer" target="_blank">photography</a> and <a href="https://www.youtube.com/channel/UCKWAbj-8U6WNcJckYA52z9A?view_as=subscriber" rel="noopener noreferrer" target="_blank">music</a>.
          </p>
          <p class="quote">
            <strong>The reason a lot of people do not recognize opportunity </strong> is because it usually goes around wearing overalls
              looking like hard work.

            — Thomas A. Edison.
          </p>
        </div>


        <div class="skill-lockup">

        </div>
      </section>
      </div>

      </ScrollableAnchor>
    );
  }
}
