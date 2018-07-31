import React from 'react'

export default class Dropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			expanded: false,
			vendor: 'Paragon',
			day: 'Monday'
		};
	}
	
	expand() {
		this.setState({ expanded: true });
	}
	
	collapse() {
		this.setState({ expanded: false });
	}
	
	handleItemClick(e) {
		this.setState({
			expanded: false,
			vendor: e.target.innerText
		});
	}
	
	handleTriggerClick() {
		this.setState({ expanded: !this.state.expanded });
	}
	
	render() {
		let dropdown = undefined;
		var vendorList = ['Paragon','Olive','The Cookery','French Toast','Sneha']
		if (this.state.expanded) {
			dropdown = (
				<div className='center'>
        <div className="content">
				{
					vendorList.map(item => {
						return <div onClick={(e) => { this.handleItemClick(e); }} className="item">{item}</div>;
					})
				}
				</div></div>
			);
		}
		
		return (
			<div className='center'>
     		 <div className={`dropdown ${this.state.expanded ? 'active' : ''}`}
				tabIndex="0"
				onBlur={() => { this.collapse(); }}>
				<div className="trigger" onClick={() => { this.handleTriggerClick(); }}>
					{this.state.vendor}
				</div>
				{dropdown}
			</div></div>
		);
	}
}

