import React, { Component } from 'react';
import $ from 'jquery';

class Customers extends Component {
  constructor(props){
    super(props);
    this.state={
      customers:[]
    }
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){
    fetch('/api/customers')
    .then(res=>res.json())
    .then(customers=>this.setState({customers:customers},()=> console.log(123,customers)));
  }
  handleChange(event) {
    alert(event.target.value);
    fetch('/api/customersType/'+event.target.value)
    .then(res=>res.json())
    .then(customers=>this.setState({customers:customers},()=> console.log(123,customers)));
  }
  render() {
    var matchProp = 'any';
    return (
      <div>      
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="1">tipo 1</option>
            <option value="2">tipo 2</option>
            <option value="3">tipo 3</option>
          </select>
          <hr />
          <h2 onClick={this.handleClick} id="123">Customers</h2>  
          <ul>
            {this.state.customers.map(customer=>
            <li key={customer.id}>{customer.name} {customer.lastname}</li>            
            )}
          </ul>
      </div>
    );
  }
}

export default Customers;
