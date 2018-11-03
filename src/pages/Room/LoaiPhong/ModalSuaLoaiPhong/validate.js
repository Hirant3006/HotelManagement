
const validate = values => {
  const errors = {};

  if (!values.tenloai) {
    errors.tenloai = 'Vui lòng nhập tên loại'
  }
  
  if (!values.dongia) {
    errors.dongia = 'Vui lòng nhập đơn giá'
  } 
  
  return errors;
}
export default validate;