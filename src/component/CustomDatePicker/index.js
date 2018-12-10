import React, { PureComponent } from 'react';
// import { change } from 'redux-form';
import { DatePicker } from 'antd';

type Props = {
  input: any,
  meta: any,
  defaultValue: any,
}

class CustomDatePicker extends PureComponent<Props> {
  componentDidMount() {
    const { defaultValue, input: { onChange } } = this.props;
    if (defaultValue) {
      onChange(defaultValue.format("MM/DD/YYYY"))
    }
  }

  render() {
    const {
      input: { onChange },
      meta: { touched, error },
      defaultValue,
    } = this.props;
    return (
      <DatePicker
        placeholder={"Select date"}
        className={touched && error ? 'has-error ' : ''}
        format="MM/DD/YYYY"
        onChange={(value) => value ? onChange(value.format('MM/DD/YYYY')) : null}
        defaultValue={defaultValue}
      />
    );
  }
};

export default CustomDatePicker;