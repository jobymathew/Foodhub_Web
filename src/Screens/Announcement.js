import React from 'react';
import Header from './Navi';
import './Login.css';
export default class Announcement extends React.Component {
    constructor(props) {
        super(props);
        this.state = (
            {value:''},
            {long:''}
        );
    
        this.handleChange = this.handleChange.bind(this);
        this.handleLongChange = this.handleLongChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
      handleLongChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    
      render() {
        return (
            <div className='gocenter'> <Header />
          <form onSubmit={this.handleSubmit}>
          <label><input className='gocenter' id='oneline' type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter the pop-up message"/><br/>
              </label><label><input className='gocenter' id='textarea' type="text" value={this.state.long} onChange={this.handleLongChange} placeholder="Enter the announcement"/><br/>
            </label>
            <input className="submit" type="submit" value="Submit" />
          </form> </div>
        );
      }
}
