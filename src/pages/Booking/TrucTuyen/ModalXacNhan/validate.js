// import validator from 'validator';

const validate = values => {
  const errors = {};
  if (!values.tenloai) {
    errors.tenloai = "Không được bỏ trống ô này";
  } else if (values.tenloai.length > 15) {
    errors.tenloai = "Must be 15 characters or less";
  }
  if (!values.tiencoc) {
    errors.tiencoc = "Không được bỏ trống ô này";
  } else if (isNaN(Number(values.dongia))) {
    errors.tiencoc = "Đơn giá phải là một con số";
  }
  return errors;
};

export default validate;