import React from 'react';
import Header from './Navbar';
import './login.css';
import './css/main.css';
import fire from '../firebase';
import { Button } from 'react-bootstrap';
import Modal from 'react-responsive-modal';
export default class Announce extends React.Component {
    constructor(props) {
        super(props);
        this.state = (
            {long: []},
            {ann: []},
            {open: false}
        );   
      }
      componentDidMount() {
        fire.database().ref('announcements').orderByKey().limitToLast(100).on('value', snapshot => {
            const values = snapshot && snapshot.val() || {}
            const ann = Object.keys(values).map(id => {
                return { id, ...values[id] }
            })
            this.setState({ ann })
        })
    }
      addMessage(e){
        e.preventDefault()

        var newData={
        Popup: this.inputE3.value,
        Longtext: this.inputE2.value
        }
    
        fire.database().ref('announcements').push(newData);
        
      this.inputE3.value = ''; 
      this.inputE2.value = ''; 
      } 
    
      remove(id){
        // console.log(this.state)
        let a = fire.database().ref('announcements/'+id)
        a.remove()
        this.onCloseModal()
            } 
      onOpenModal = () => {
        this.setState({ open: true });
      };
      onCloseModal = () => {
        this.setState({ open: false });
      };
      render() {
        return (
            <div>
                <Header />
                <h1 className='header'>Announcement</h1>
                <div className='ann'><form onSubmit={this.addMessage.bind(this)}>
                <input className='gocenter' id='inp' type="text" ref={ e3 => this.inputE3 = e3 } placeholder="Enter the Pop-Up"/>
                <input className='gocenter' id='inp' type="text" ref={ e2 => this.inputE2 = e2 } placeholder="Enter the longtext"/>
                <input className="addmenu" type="submit" value="Add" /><br />
          </form></div>
            <div class="limiter">
		<div class="container-table100">
			<div class="wrap-table100">
				<div class="table100 ver1 m-b-110">
					<div class="table100-head">
						<table>
							<thead>
								<tr class="row100 head">
									<th class="cell100 column1">Pop-up</th>
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
                            {this.state.ann ? this.state.ann.map( (anno) =>
								<tr class="row100 body" key={anno.id}>
									<td class="cell100 column1">{anno.Popup}</td>
									<td class="cell100 column1">{anno.Longtext}</td>
									<td class="cell100 column1"><div className="test"><img className='close' onClick={this.onOpenModal} src={ require('./close.png') } />
                                    <Modal open={this.state.open} onClose={this.onCloseModal} showCloseIcon={false} center >
                                        <h2 className='modbtn'>Are you sure you want to remove this Pop-up?</h2>
                                        <Button className="addmenu" onClick={this.remove.bind(this, anno.id)}>Yes</Button>
                                        <Button className="addmenu2" onClick={this.onCloseModal}>No</Button>
                                        </Modal>
                                    </div></td>
								</tr>) : (null) }								
							</tbody>
						</table>
					</div>
				</div>           
            </div>
            </div></div></div>
        ); 
      }
}
