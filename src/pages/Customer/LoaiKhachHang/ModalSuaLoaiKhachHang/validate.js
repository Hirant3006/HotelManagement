// import validator from 'validator';

const validate = values => {
  const errors = {};
  if (!values.tenloai) {
    errors.tenloai = "Không được bỏ trống ô này";
  } else if (values.tenloai.length > 15) {
    errors.tenloai = "Must be 15 characters or less";
  }
 
  return errors;
};


export default validate;