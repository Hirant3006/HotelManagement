// import validator from 'validator';

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Vui lòng nhập tên vị trí'
  } 
  
  return errors;
}

export default validate;