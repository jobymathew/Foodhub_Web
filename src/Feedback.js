import React from 'react';
import Header from './Navi';
import './App.css';
import { Button } from "react-bootstrap";
import CF from './CF';
import fire from './firebase';


export default class Feedback extends React.Component {
  constructor(props){
    super(props);
    this.state = ({  
        messages : []
});
}

componentWillMount(){
    /* Create reference to messages in Firebase Database */

    this.setState({ ...this.state, messages: [] });

        let messagesRef = fire.database().ref('feedback').orderByKey().limitToLast(100);
        messagesRef.on('child_added', snapshot => {
          /* Update React   state when message is added at Firebase Database */
          let message1 = { text: snapshot.val(), id: snapshot.key };
          console.log(this.state.messages);
          this.setState({ ...this.state, messages: this.state.messages.concat(message1) });
        })
  }
  addMessage(e){
      
    var newData={
    Popup: this.inputE3.value,
    Longtext: this.inputE2.value
    }

    fire.database().ref('feedback').push(newData);
    
  this.inputE3.value = ''; 
  this.inputE2.value = ''; 
  let messagesR = fire.database().ref('feedback').orderByKey().limitToLast(100);
  messagesR.on('child_added', snapshot => {
    /* Update React   state when message is added at Firebase Database */
    let message1 = { text: snapshot.val(), id: snapshot.key };
    this.setState({ ...this.state, messages: this.state.messages.concat(message1) });
  })
  } 

  remove(id){
    // console.log(this.state)
    let a = fire.database().ref('feedback/'+id)
    a.remove()
    this.setState({ ...this.state, messages: [] });
  }  
  
  render(){
      return(
        <div className='gocenter'>
        <Header />
        {/* <form onSubmit={this.addMessage.bind(this)}> */}
            {/* <input className='gocenter' id='one' type="text" ref={ el => this.inputE3 = el } placeholder="Enter the dish-name"/> */}
              {/* <input className='gocenter' id='one' type="text" ref={ e2 => this.inputE2 = e2 } placeholder="Enter the price"/> */}
              {/* <input className="submit" type="submit" value="Add Menu" /><br /> */}
          {/* </form> */}
     
        
          <p id='oneline'> Feedbacks </p>
          <ul>
       
      {this.state.messages ? this.state.messages.map( message1 => 
        <li id='oneline' key={message1.id}>
        <div id='one'>{message1.text.Popup} </div> <div id='one'>{message1.text.Longtext}</div>
          <Button className='submit' onClick={this.remove.bind(this, message1.id)}>
            Remove
          </Button>
        </li>) 
      : (null)}
    
    </ul>
      
        
        </div>
    );
    }
}