import { Radio } from 'antd';
import React from "react";
const RadioGroup = Radio.Group;

export default class RadioItem extends React.Component {
  state = {
    value: 1,
  }

  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    const { 
     type,
    //  onChange
     } = this.props;
    return (
      <RadioGroup onChange={this.onChange} value={this.state.value} type={type}>
        <Radio style={radioStyle} value={1}>DV1</Radio>
        <Radio style={radioStyle} value={0}>DV2</Radio>       
      </RadioGroup>
    );
  }
}

