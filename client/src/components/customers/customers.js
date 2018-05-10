import React, { Component } from 'react';
import $ from 'jquery';
import Select2 from 'react-select2-wrapper';


class Customers extends Component {
  constructor(props){
    super(props);
    this.state={
      customers:[]
    }
    //this.handleClick = this.handleClick.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
  }
  componentDidMount(){
    fetch('/api/customers')
    .then(res=>res.json())
    .then(customers=>this.setState({customers:customers},()=> console.log(123,customers)));
  }
  // handleChange = function(event) {
  //   //alert(event.target.value);
  //   fetch('/api/customersType/'+event.target.value)
  //   .then(res=>res.json());    
  // };
  handleClick1(e) {
    handleClick(e.target.value);
  }
  handleClick(e) {
    // alert(event.target.value);
    $("#123").text('1asdqweasd');
    fetch('/api/customersType/'+2)
    .then(res=>res.json())
    .then(customers=>this.setState({customers:customers},()=> console.log(123,customers))); 
    var asd=[{id:"1",name:"123",lastname:"asd"}];
    this.setState({customers:asd});
    console.log(123);
  }
  render() {
    return (
      <div>      
          <Select2 onChange={this.handleClick1} 
            data={[
              { text: 'tipo 1', id: 1 },
              { text: 'tipo 2', id: 2 },
              { text: 'tipo 3', id: 3 },            
            ]}
          />
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
