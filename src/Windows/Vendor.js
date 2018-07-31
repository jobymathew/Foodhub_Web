import React from 'react';  
import Header from './Navbar';
import { Button } from 'react-bootstrap';
import './login.css'
import fire from '../firebase';
import './css/main.css';
import Modal from 'react-responsive-modal';

export default class Vendor extends React.Component {

    constructor(props){
        super(props);
        this.state = ({
            Vendor : 'Paragon',
            dishes : [],
            showMenu: false,
            days: [' Mon ',' Tue ',' Wed ',' Thu ',' Fri ',' Sat '],
            show: false,
            checked: true,
            open : false
        });
        this.handleDaySelect=this.handleDaySelect.bind(this);
    } 
    // componentDidMount(){
    //     this.setState({ ...this.state, messages: [] });

    //     let messagesRef = fire.database().ref('dishes').orderByKey().limitToLast(100);
    //     messagesRef.on('child_added', snapshot => {
    //       let message1 = { text: snapshot.val(), id: snapshot.key };
    //       console.log(this.state.messages);
    //       this.setState({ ...this.state, messages: this.state.messages.concat(message1) });
    //     }){
    //   }

      componentDidMount() {
          fire.database().ref('dishes').orderByKey().limitToLast(100).on('value', snapshot => {
              const values = snapshot && snapshot.val() || {}
              const dishes = Object.keys(values).map(id => {
                  return { id, ...values[id] }
              })
              this.setState({ dishes })
          })
      }
      addMessage(e){
        e.preventDefault()
        
        var newData={
        Vendor: this.inputE3.value,
        Dish: this.inputEl.value,
        Price : this.inputE2.value,
        Days : this.state.days
        }

        fire.database().ref('dishes').push(newData);
        
      this.inputEl.value = ''; 
      this.inputE2.value = ''; 
      this.inputE3.value = ''; 
      } 
      remove(){
        // console.log(this.state)
        const { selectedId } = this.state
        let a = fire.database().ref('dishes/'+selectedId)
        a.remove()
        this.onCloseModal()
      }  
      handleDaySelect(event){
        let day_list = this.state.days;
        let check = event.target.checked;
        let checked_day = event.target.value;
        if(check){
            this.setState({
                days: [...this.state.days, checked_day]
            })      
            console.log(this.state.days);
        }else{ 
            var index = day_list.indexOf(checked_day);
            if (index > -1) {
                day_list.splice(index, 1);
                this.setState({
                    days: day_list
                })
            } 
        }
    }
    onOpenModal = (selectedId) => {
        this.setState({ open: true, selectedId });
      };
      onCloseModal = () => {
        this.setState({ open: false });
      };
    render(){
      const daysOptions = [" Mon ", " Tue ", " Wed ", " Thu ", 
    " Fri ", " Sat "].map((cur, ind) => {
        return (
            <div key={ind} className="oth" >
                    <input type="checkbox" className="box" defaultChecked={this.state.checked} name={cur} value={cur} 
                    onChange={this.handleDaySelect} />
                    <div className=''>
                    <label id='it'>{cur}</label>
                  </div>
            </div>
        )
    })
        return(
            <div className=''>
            <Header />
            <h1 className='header'>Menu</h1>
            
    <div class="limiter">
		<div class="container-table100">
			<div class="wrap-table100">
				<div class="table100 ver1 m-b-110">
					<div class="table100-head">
						<table>
							<thead>
								<tr class="row100 head">
									<th class="cell100 column2">Vendor</th>
									<th class="cell100 column2">Dish Name</th>
									<th class="cell100 column3">Price</th>
                  <th class="cell100 column1    ">Days</th>
									<th class="cell100 column4">Remove</th>
								</tr>
							</thead>
						</table>
					</div>
					<div class="table100-body js-pscroll">
						<table>
							<tbody>
                            {this.state.dishes ? this.state.dishes.map( (dish) =>
								<tr class="row100 body" key={dish.id}>
									<td class="cell100 column2">{dish.Vendor}</td>
									<td class="cell100 column2">{dish.Dish}</td>
									<td class="cell100 column3">{dish.Price}</td>
                  <td class="cell100 column1">{dish.Days}</td>
									<td class="cell100 column4"><div className="test"><img className='close' onClick={this.onOpenModal.bind(this, dish.id)} src={ require('./close.png') } />
                                                                        </div></td>
								</tr>) : (null) }								
							</tbody>
						</table>
					</div>

                    <Modal open={this.state.open} onClose={this.onCloseModal} showCloseIcon={false} center >
                        <h2 className='modbtn'>Are you sure you want to remove this dish?</h2>
                        <Button className="addmenu" onClick={this.remove.bind(this)}>Yes</Button>
                        <Button className="addmenu2" onClick={this.onCloseModal}>No</Button>
                    </Modal>

				</div>           
            </div>
            </div>
            </div>
            <div className="coverbox">
            <h1 className='header'>ADD NEW DISH</h1>
            <div id='pad'>
            <form onSubmit={this.addMessage.bind(this)}>
            <div className='cen'>
            <select className='custom-dropdown' ref={ e3 => this.inputE3 = e3 } > dropdown
                <option value="French Toast">French Toast</option>
                <option value="Olive">Olive</option>
                <option selected value="Paragon">Paragon</option>
                <option value="The Cookery">The Cookery</option>
                <option value="Sneha">Sneha</option>
                    </select> <div className="cen2">
            <div className='space'><input className='inp' type="text" ref={ el => this.inputEl = el } placeholder="Enter the dish Name"/></div>
            <div className='space'><input className='inp' type="text" ref={ e2 => this.inputE2 = e2 } placeholder="Enter the price"/></div>
            </div> <div className='cen2'>
            <div id="newDeal" className="formContainer" >
            <div className="" >
                {daysOptions}
            </div> </div>
            </div></div>
            <div className='cen3'>
              <input className="addmenuvend" type="submit" value="Add Menu" />
              </div>
          </form></div>
          </div>
            </div>
        );
    }
}
