import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              //src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
<<<<<<< HEAD
            // src="/IMG_20200101_185645.jpg"
            src="https://i.ibb.co/f89xPHM/IMG-20200101-185645.jpg"
=======
             src="https://i.ibb.co/f89xPHM/IMG-20200101-185645.jpg"
>>>>>>> 1a44d9a76275e676f4a4a3ac0fee081aeffce547
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Hello ! I am Shubha</h1>
              <h5>Full Stack Web Developer</h5>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Freecodecamp */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-free-code-camp" aria-hidden="true" />
          </a>

          {/* Youtube */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
