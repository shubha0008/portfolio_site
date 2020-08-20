import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCW7y_qzjN-JUNY1PtfRUrJyT2ePooow-vlg&usqp=CAU)'}} ></CardTitle>
            <CardText>
            Kaprekar constant, or 6174, is a constant that arises when we take a 4-digit integer, form the largest and smallest numbers from its digits, and then subtract these two numbers. Continuing with this process of forming and subtracting, we will always arrive at the number 6174.
            </CardText>
            <CardActions border>
              <Button colored href="https://infallible-goldstine-5b3b81.netlify.app/" target="_blank">Go to Site</Button>
              {/* <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button> */}
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(data:image/png;base64,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) center / cover'}} ></CardTitle>
            <CardText>
              Tic-Tac-Toe game using javascript and some of concepts from AI.
            </CardText>
            <CardActions border>
              <Button colored href= "https://affectionate-wing-65d162.netlify.app/" target="_blank">Go To Site</Button>
            
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQy7w4mfX7I5MUFTWx4qdMSNOABz945bMHbw&usqp=CAU) center / cover'}} ></CardTitle>
            <CardText>
              A small-scale replica of Facebook as BroadcastApp.
            </CardText>
            <CardActions border>
              <Button colored href= "https://github.com/shubha0008/broadcast-shubha" target="_blank">Go to GitHub Repository</Button>
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
            }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Projects</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;