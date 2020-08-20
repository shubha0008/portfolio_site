import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              
            </div>

            <h2 style={{paddingTop: '2em'}}>Shubha Rashmi</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Looking Forward to Switch from Service based projects to Product Based project . I am always looking out for and learning new and better approaches and technologies that help me do a better job . I am passionate / curious / interested about my craft / profession, my professional community.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Hinjewadi , Rajiv Gandhi Infotech Park , Phase 3</p>
            <h5>Phone</h5>
            <p>7978850234,7205396684</p>
            <h5>Email</h5>
            <p>shubharashmi101@gmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2009}
              endYear={2010}
              schoolName="Higher Education"
              schoolDescription="D.A.V. Public School , Hazaribagh"
               />

               <Education
                 startYear={2011}
                 endYear={2012}
                 schoolName="Higher/Senior Secondary Education"
                 schoolDescription="D.A.V. Public School , Hazaribagh"
                  />

              <Education
                 startYear={2013}
                 endYear={2017}
                 schoolName="Graduation"
                 schoolDescription="Silicon Institute of Technology , Bhubaneswar"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2018}
              endYear={2020}
              jobName="First Job"
              jobDescription="Working as Network Design Engineer from Last 2.4 Years"
              />

              
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={90}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={60}
                    />
                    <Skills
                      skill="React"
                      progress={50}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;