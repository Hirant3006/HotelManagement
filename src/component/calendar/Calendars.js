import React from "react";
import { Calendar,Alert } from 'antd'; 
import ReactDOM from 'react-dom'
import moment from 'moment';
import { DatePicker } from 'antd';
const { MonthPicker, RangePicker, onChange } = DatePicker;


  export default class Calendars extends React.Component {
    state = {
      value: moment('2017-01-25'),
      selectedValue: moment('2017-01-25'),
         }

    onSelect = (value) => {
      this.setState({
        value,
        selectedValue: value,
       
      });
    }
  
     onChange = (value)=>  {
     // value = moment(value).format("YYYY-MM-DD");
      value,
      this.setState({ value });
    console.log(value);
    }
  
    render() { 
      const { value, selectedValue } = this.state;
       return (
     
        <DatePicker value={value} onSelect={this.onSelect} onChange={this.onChange}  />
   
     
      );
    }
  }




