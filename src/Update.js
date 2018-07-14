import React from 'react';
import Header from './Navi';
import Dates from './Dates';
import { Button } from 'react-bootstrap';
import './Login.css';
import Menu from './Menu';
import Vendor from './Vendor';

export default class Update extends React.Component {
    constructor(props){
        super(props);
        this.state = (
            { update : ''}
        );
    }
    
    render(){
        return(
            <div className='gocenter'>
            <Header />
            <Dates />
            <p id='vid' className='heading'> {this.props.name} </p>
            <Button className='vendorbutton'
            block
            bsSize="large"
            type="submit"
          > 
            Update
          </Button>
         
            
            </div>
        );
    }
}