import { Radio, Input } from 'antd';
import React, { PureComponent } from "react";

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
    return (
      <RadioGroup onChange={this.onChange} value={this.state.value}>
        <Radio style={radioStyle} value={1}>Male</Radio>
        <Radio style={radioStyle} value={2}>Female</Radio>       
      </RadioGroup>
    );
  }
}

//ReactDOM.render(<App />, mountNode);