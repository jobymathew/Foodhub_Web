import React from 'react';
import Header from './Navbar';
import './login.css';
import './css/main.css';
import { Button } from "react-bootstrap";
import fire from '../firebase';
import Modal from 'react-responsive-modal';


export default class Feedback extends React.Component {
  constructor(props){
    super(props);
    this.state = ({  
        feed : [],
        open: false
});
}
onOpenModal = () => {
  this.setState({ open: true });
};
onCloseModal = () => {
  this.setState({ open: false });
};

componentDidMount() {
  fire.database().ref('feedback').orderByKey().limitToLast(100).on('value', snapshot => {
      const values = snapshot && snapshot.val() || {}
      const feed = Object.keys(values).map(id => {
          return { id, ...values[id] }
      })
      this.setState({ feed })
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
  } 

  remove(id){
    // console.log(this.state)
    let a = fire.database().ref('feedback/'+id)
    a.remove()
    this.onCloseModal()
    }  
  
  render(){
      return(
        <div className='gocenter'>
        <Header />
        <h1 className='header'>Feedback</h1>
        {/* <form onSubmit={this.addMessage.bind(this)}> */}
            {/* <input className='gocenter' id='one' type="text" ref={ el => this.inputE3 = el } placeholder="Enter the dish-name"/> */}
              {/* <input className='gocenter' id='one' type="text" ref={ e2 => this.inputE2 = e2 } placeholder="Enter the price"/> */}
              {/* <input className="submit" type="submit" value="Add Menu" /><br /> */}
          {/* </form> */}
          <div class="limiter">
		<div class="container-table100">
			<div class="wrap-table100">
				<div class="table100 ver1 m-b-110">
					<div class="table100-head">
						<table>
							<thead>
								<tr class="row100 head">
									<th class="cell100 column1">Title</th>
									<th class="cell100 column1">Message</th>
									<th class="cell100 column1">Remove</th>
								</tr>
							</thead>
						</table>
					</div>
            {/* <ul>            */}
            {/* <li id='oneline' key={message1.id}><div id='one' >{message1.text.Type} </div><div id='one' > {message1.text.Dish} </div><div id='one' > {message1.text.Price}</div> <Button className='submit' onClick={this.remove.bind(this, message1.id)}>Remove</Button></li> ) : (null)}          */}
         {/* </ul>  */}
         

					<div class="table100-body js-pscroll">
						<table>
							<tbody>
                            {this.state.feed ? this.state.feed.map( (feedb) =>
								<tr class="row100 body" key={feedb.id}>
									<td class="cell100 column1">{feedb.Popup}</td>
									<td class="cell100 column1">{feedb.Longtext}</td>
									<td class="cell100 column1"><div className="test"><img className='close' onClick={this.onOpenModal} src={ require('./close.png') } />
                  <Modal open={this.state.open} onClose={this.onCloseModal} showCloseIcon={false} center >
                                        <h2 className='modbtn'>Are you sure you want to remove this feedback?</h2>
                                        <Button className="addmenu" onClick={this.remove.bind(this, feedb.id)}>Yes</Button>
                                        <Button className="addmenu2" onClick={this.onCloseModal}>No</Button>
                                        </Modal>
                  </div></td>
								</tr>) : (null) }								
							</tbody>
						</table>
					</div>
				</div>           
            </div>
            </div> </div> </div>
        
    );
    }
}