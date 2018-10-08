import React, { PureComponent } from "react";
// import { change } from 'redux-form';
import { Input, Alert } from "antd";

class CustomInput extends PureComponent{

  render() {
    const {
      input,
      placeholder,
      type,
      meta: { touched, error }

      // ...rest
    } = this.props;
    return (
      <div>
        <div>
          <Input {...input} placeholder={placeholder} type={type} />
          {touched && error ? (
            <Alert type="error" message={error} banner />
          ) : null}
        </div>

         
       
        
      </div>
    );
  }
}

export default CustomInput;
