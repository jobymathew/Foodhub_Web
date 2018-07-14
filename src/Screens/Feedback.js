import React from 'react';
import Header from './Navi';
import './App.css';
import { Button } from "react-bootstrap";
import CF from './CF';


export default class Feedback extends React.Component {
    render(){
        return(
            <div>
              <Header />
              <CF />
            <Button className='menubutton'
            block
            bsSize="large"
            type="submit" 
            onClick={this.Vend}
          > 
            Feedbacks from Paragon
          
          </Button>
          <Button className='menubutton'
            block
            bsSize="large"
            type="submit"
            onClick={this.Vend}

          >
            Feedbacks from The Cookery
          </Button>
          <Button className='menubutton'
            block
            bsSize="large"
            type="submit"
            onClick={this.Vend}

          >
            Feedbacks from Olive
          </Button>
          <Button className='menubutton'
            block
            bsSize="large"
            type="submit"
            onClick={this.Vend}>
            Feedbacks from French Toast
          </Button></div>
        );
    }
}