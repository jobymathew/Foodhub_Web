import React from 'react';
import Header from './Navi';
import Dates from './Dates';
import { Button } from 'react-bootstrap';
import './Login.css';
import Menu from './Menu';

export default class Vendor extends React.Component {
    constructor(props){
        super(props);
        this.state = (
            { vendor : ''}
        );
    }
    render(){
        const { id } = this.props.history.params
        return(
            <div className='gocenter'>
            <Header />
            <Dates />  
            <p id='vid' className='heading'> {this.props.history.params} </p>
            <Button className='vendorbutton'
            block
            bsSize="large"
            type="submit"
          > 
            View Menu
          </Button>
          <Button className='vendorbutton'
            block
            bsSize="large"
            type="submit"
          >
            Update Menu
          </Button>
            
            </div>
        );
    }
}
