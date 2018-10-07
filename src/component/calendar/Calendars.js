import React from "react";
import { Calendar,Alert } from 'antd'; 
//import ReactDOM from 'react-dom'
import moment from 'moment';


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
  
    onPanelChange = (value) => {
      this.setState({ value });
    }
    render() { 
      const { value, selectedValue } = this.state;
      return (
        <div style={{ width: 400, border: '1px solid #d9d9d9', borderRadius: 4 }}>
        <Alert message={`You selected date: ${ selectedValue&& selectedValue.format('DD-MM-YYYY')}`} />
        <Calendar value={value} onSelect={this.onSelect} onPanelChange={this.onPanelChange} />
        </div>
      );
    }
  }


  