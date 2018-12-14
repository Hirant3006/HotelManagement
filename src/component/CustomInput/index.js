import React, { PureComponent } from "react";
<<<<<<< HEAD
import { change } from 'redux-form';
import { Input, Alert,Icon } from "antd";
import CurrencyInput from 'react-currency-input';
=======
// import { change } from 'redux-form';
import { Input, Icon, Alert } from "antd";
import CurrencyInput from "react-currency-input";

>>>>>>> 003a9ce64e55bb0c6c84c060e56eb0c1c30aeafe
type Props = {
  icon: String,
  type: String,
  input: any,
  className: String,
  addonAfter: any,
  addonBefore: any,
  placeholder: String,
  defaultValue: any,
  meta: any,
  rest: any
};

class CustomInput extends PureComponent<Props> {
  componentDidMount() {
    const {
      defaultValue,
      input: { onChange }
    } = this.props;
    if (defaultValue !== null) {
      onChange(defaultValue);
    }
  }

  render() {
    const {
      icon,
      type,
      input,
      className,
      addonAfter,
      placeholder,
      addonBefore,
      defaultValue,
      meta: { touched, error }
      // ...rest
    } = this.props;
<<<<<<< HEAD
    const CustomClassName = touched && error ? 'has-error ' + className : className;
    if (type === 'number') return (
      <div>
        <CurrencyInput
          value={defaultValue}
          placeholder={touched && error ? error : placeholder}
          precision="0"
          thousandSeparator="."
      //    suffix=" VNĐ/Giờ"
          className={CustomClassName ? `ant-input ${CustomClassName}` : 'ant-input'}
          {...input}
        />
        {touched && error ?
          <Alert type="error" message={error} banner /> : null
        }
      </div>
    )
=======
    const CustomClassName =
      touched && error ? "has-error " + className : className;
    if (type === "number")
      return (
        <div>
          <CurrencyInput
            value={defaultValue}
            placeholder={touched && error ? error : placeholder}
            precision="0"
            thousandSeparator="."
            suffix=" VNĐ/Giờ"
            className={
              CustomClassName ? `ant-input ${CustomClassName}` : "ant-input"
            }
            {...input}
          />
          {touched && error ? (
            <Alert type="error" message={error} banner />
          ) : null}
        </div>
      );
>>>>>>> 003a9ce64e55bb0c6c84c060e56eb0c1c30aeafe
    return (
      <div>
        <Input
          type={type || "text"}
          value={defaultValue}
          className={CustomClassName}
          placeholder={touched && error ? error : placeholder}
          prefix={
            icon ? (
              <Icon type={icon} style={{ color: "rgba(0,0,0,.25)" }} />
            ) : null
          }
          addonBefore={addonBefore}
          addonAfter={addonAfter}
          min="0.01"
          step="0.01"
          {...input}
        />
        {touched && error ? (
          <Alert type="error" message={error} banner />
        ) : null}
      </div>
    );
  }
}

export default CustomInput;
