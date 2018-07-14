import React from 'react';  
import Header from './Navi';
import Dates from './Dates';
import { Button } from 'react-bootstrap';
import './Login.css';
import Menu from './Menu';
import Diff from './Diff';
import { firebaseData, fireTreeToArray, refs } from 'firebase';
import fire from './firebase';

export default class Vendor extends React.Component {

    constructor(props){
        super(props);
        this.state = ({
             Vendor : 'Paragon',
            messages : [],
            showMenu: false,
            Day: 'Monday',
            show: false
        });
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.changeDate = this.changeDate.bind(this);
        // this.changeFirstDate = this.changeFirstDate.bind(this);
        // this.changeSecondDate = this.changeSecondDate.bind(this);
        // this.changeThirdDate = this.changeThirdDate.bind(this);
        // this.changeFourthDate = this.changeFourthDate.bind(this);
        this.show = this.show.bind(this);
        this.close = this.close.bind(this);
        this.change = this.change.bind(this);
        this.changeFirst = this.changeFirst.bind(this);
        this.changeSecond = this.changeSecond.bind(this);
        this.changeThird = this.changeThird.bind(this);
        this.changeFourth = this.changeFourth.bind(this);
    }
    show(event) {
        event.preventDefault();
        
        this.setState({ ...this.state, show: true }, () => {
          document.addEventListener('click', this.close);
        });
      }
      
      close(event) {
        
        if (!this.dropdownMenu.contains(event.target)) {
          
          this.setState({ ...this.state, show: false }, () => {
            document.removeEventListener('click', this.close);
          });  
          
        }
      }
      change() {
        this.setState({ ...this.state, Vendor: 'Paragon' });
        this.setState({ ...this.state, show: false }, () => {
          document.removeEventListener('click', this.close);
        });  
      }
      changeFirst() {
        this.setState({ ...this.state, Vendor: 'Olive' });
        this.setState({ ...this.state, show: false }, () => {
          document.removeEventListener('click', this.close);
        });  
      }changeSecond() {
        this.setState({ ...this.state, Vendor: 'The Cookery' });
        this.setState({ ...this.state, show: false }, () => {
          document.removeEventListener('click', this.close);
        });  
      }changeThird() {
        this.setState({ ...this.state, Vendor: 'French Toast' });
        this.setState({ ...this.state, show: false }, () => {
          document.removeEventListener('click', this.close);
        });            
      }changeFourth() {
        this.setState({ ...this.state, Vendor: 'Sneha' });
        this.setState({ ...this.state, show: false }, () => {
          document.removeEventListener('click', this.close);
        });  
      }
    showMenu(event) {
        event.preventDefault();
        
        this.setState({ ...this.state, showMenu: true }, () => {
          document.addEventListener('click', this.closeMenu);
        });
      }
      
      closeMenu(event) {
        
        if (!this.dropdownMenu.contains(event.target)) {
          
          this.setState({ ...this.state, showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
          });  
          
        }
      }
      changeDate() {
        console.log(this.state);
        this.setState({ ...this.state, Day: 'Monday' });
        this.setState({ ...this.state, showMenu: false }, () => {
          document.removeEventListener('click', this.closeMenu);
        }); 
      }
      changeFirstDate() {
        console.log(this.state);
        this.setState({ ...this.state, Day: 'Tuesday' });
        this.setState({ ...this.state, showMenu: false }, () => {
          document.removeEventListener('click', this.closeMenu);
        });
      }
      changeSecondDate() {
        this.setState({ ...this.state, Day: 'Wednesday' });
        this.setState({ ...this.state, showMenu: false }, () => {
          document.removeEventListener('click', this.closeMenu);
        });  
      }
      changeThirdDate() {
        this.setState({ ...this.state, Day: 'Thursday' });
        this.setState({ ...this.state, showMenu: false }, () => {
          document.removeEventListener('click', this.closeMenu);
        });  

      }
      changeFourthDate() {
        this.setState({ ...this.state, Day: 'Friday' });
        this.setState({ ...this.state, showMenu: false }, () => {
          document.removeEventListener('click', this.closeMenu); 
        });  

      }
      // remove(id) {
      //   refs.vendorById(id).remove()
      // }
    componentDidMount(){
        this.setState({ ...this.state, messages: [] });

        let messagesRef = fire.database().ref('vendor/'+this.state.Day+'/'+this.state.Vendor+'/dishname').orderByKey().limitToLast(100);
        messagesRef.on('child_added', snapshot => {
          /* Update React   state when message is added at Firebase Database */
          let message1 = { text: snapshot.val(), id: snapshot.key };
          console.log(this.state.messages);
          this.setState({ ...this.state, messages: this.state.messages.concat(message1) });
        })
      }
      addMessage(e){
      
        var newData={
        Type: this.inputE3.value,
        Dish: this.inputEl.value,
        Price : this.inputE2.value
        }

        fire.database().ref('vendor/'+this.state.Day+'/'+this.state.Vendor+'/dishname').push(newData);
        
      this.inputEl.value = ''; 
      this.inputE2.value = ''; 
      this.inputE3.value = ''; 
      let messagesR = fire.database().ref('vendor/'+this.state.Day+'/'+this.state.Vendor+'/dishname').orderByKey().limitToLast(100);
      messagesR.on('child_added', snapshot => {
        /* Update React   state when message is added at Firebase Database */
        let message1 = { text: snapshot.val(), id: snapshot.key };
        this.setState({ ...this.state, messages: this.state.messages.concat(message1) });
      })
      } 
      remove(id){
        // console.log(this.state)
        let a = fire.database().ref('vendor/'+this.state.Day+'/'+this.state.Vendor+'/dishname/'+id)
        a.remove()
        this.setState({ ...this.state, messages: [] });
        //  this.componentDidMount();
      }
      
    render(){

        return(
            <div className='gocenter'>
            <Header />
            <div className='dropDown' >
        <button id='b0'className='dropbtn' onClick={this.showMenu}>
          {this.state.Day}<i className="down"></i>
        </button>
        
        {
          this.state.showMenu
            ? (
              <div
                
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <button onClick={this.changeDate.bind(this)} className='drop' > Monday </button>
                <br/>
                <button onClick={this.changeFirstDate.bind(this)} className='drop' > Tuesday </button>
                <br/>
                <button onClick={this.changeSecondDate.bind(this)} className='drop'> Wednesday </button>
                <br/><button onClick={this.changeThirdDate.bind(this)} className='drop'> Thursday</button>
              <br/><button onClick={this.changeFourthDate.bind(this)} className='drop'> Friday </button>
              </div>
            )
            : (
              null
            )
        }
      </div>
      <div className='dropDown' >
        <button id='b0'className='dropbtn' onClick={this.show}>
          {this.state.Vendor}<i className="down"></i>
        </button>
        
        {
          this.state.show
            ? (
              <div
                
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <button onClick={this.change} className='drop' > Paragon </button>
                <br/>
                <button onClick={this.changeFirst} className='drop' > Olive </button>
                <br/>
                <button onClick={this.changeSecond} className='drop'> The Cookery </button>
                <br/><button onClick={this.changeThird} className='drop'> French Toast </button>
              <br/><button onClick={this.changeFourth} className='drop'> Sneha </button>
              </div>
            )
            : (
              null
            )
        }
      </div>                    
            <form onSubmit={this.addMessage.bind(this)}>
        <input className='gocenter' id='one' type="text" ref={ e3 => this.inputE3 = e3 } placeholder="Veg or Non-Veg"/>
            <input className='gocenter' id='one' type="text" ref={ el => this.inputEl = el } placeholder="Enter the dish-name"/>
              <input className='gocenter' id='one' type="text" ref={ e2 => this.inputE2 = e2 } placeholder="Enter the price"/>
              <input className="submit" type="submit" value="Add Menu" /><br />
              <p id='oneline'> <div id='one' >Type </div><div id='one' > Dish </div><div id='one' > Price </div></p>
          </form>
            <ul>           
           {this.state.messages ? this.state.messages.map( (message1) => <li id='oneline' key={message1.id}><div id='one' >{message1.text.Type} </div><div id='one' > {message1.text.Dish} </div><div id='one' > {message1.text.Price}</div> <Button className='submit' onClick={this.remove.bind(this, message1.id)}>Remove</Button></li> ) : (null)}         
         </ul>            
            </div>
        );
    }
}
