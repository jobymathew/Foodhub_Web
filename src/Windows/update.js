import React from 'react';  
import Header from './Navbar';
import { Button } from 'react-bootstrap';
import './login.css'
import fire from '../firebase';
import './css/main.css';
var vendors = ['Paragon', 'The Cookery', 'Sneha', 'French Toast', 'Olive']
export default class Update extends React.Component{
    constructor(props){
        super(props);
        this.state = ({
             vendors : ' ',
            
        });
        // this.remove=this.remove.bind(this);
    } 
    componentDidMount(){
        this.setState({ ...this.state, vendors: [] });

        let messagesRef = fire.database().ref('vendorList').orderByKey().limitToLast(100);
        messagesRef.on('child_added', snapshot => {
          /* Update React   state when message is added at Firebase Database */
          let message1 = { text: snapshot.val(), id: snapshot.key };
          console.log(this.state.messages);
          this.setState({ ...this.state, vendors: this.state.vendors.concat(message1) });
        })
      }
      addVendor(e){
        fire.database().ref('vendorList').push(this.inputE3.value);
        
      this.inputE3.value = ''; 
      let messagesR = fire.database().ref('vendorList').orderByKey().limitToLast(100);
      messagesR.on('child_added', snapshot => {
        /* Update React   state when message is added at Firebase Database */
        let message1 = {   text: snapshot.val(), id: snapshot.key };
        this.setState({ ...this.state, vendors: this.state.vendors.concat(message1) });
      })
      } 
      remove(id){
        // console.log(this.state)
        let a = fire.database().ref('vendorList'+id)
        a.remove()
        // this.setState({ messages: messages.filter(msg => msg.id !== id) });
        this.setState({ ...this.state, vendors: [] });
        //  this.componentDidMount();
      }
    render(){
        
       
        
        return(
                <div className='center'>
                <Header /> 
                <form onSubmit={this.addVendor.bind(this)}>
                <input className='gocenter' id='inp' type="text" ref={ e1 => this.inputE3 = e1 } placeholder="Enter New Vendor Name"/>                
                <input className="addmenu" type="submit" value="Add Vendor" /><br />
                </form>                 
              <div class="limiter">
            <div class="container-table100">
                <div class="wrap-table100">
                    <div class="table100 ver1 m-b-110">
                        <div class="table100-head">
                            <table>
                                <thead>
                                    <tr class="row100 head">
                                        <th class="cell100 column1">Vendor</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                {/* <ul>            */}
                {/* <li id='oneline' key={message1.id}><div id='one' >{message1.text.Type} </div><div id='one' > {message1.text.Dish} </div><div id='one' > {message1.text.Price}</div> <Button className='submit' onClick={this.remove.bind(this, message1.id)}>Remove</Button></li> ) : (null)}          */}
             {/* </ul>  */}
             
    
                        <div class="table100-body js-pscroll">
                            <table>
                                {/* <tbody>
                                {this.state.vendors ? this.state.vendors.map( (message1) =>
								<tr class="row100 body" key={message1.id}>
									<td class="cell100 column1">{message1}</td>
									<td class="cell100 column3"><div className="test"><img className='close' onClick={this.remove.bind(this, message1.id)   } src={ require('./close.png') } /></div></td>
								</tr>) : (null) }								
                                </tbody> */}
                            </table>
                        </div>
                    </div>           
                </div>
                </div></div></div>
        );
    }
}