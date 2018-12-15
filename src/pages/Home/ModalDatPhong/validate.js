// import validator from 'validator';

const validate = values => {
  const errors = {};
  if (!values.NgayDen) {
    errors.tenloai = "Không được bỏ trống ô này";
  }
  if (!values.NgayDi) {
    errors.dongia = "Không được bỏ trống ô này";
  }
  return errors;
};

export default validate;
