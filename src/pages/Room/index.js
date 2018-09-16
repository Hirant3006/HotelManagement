import React, { PureComponent } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getListPhongRequest } from '../../actions/phong'
import { getListDVRequest } from '../../actions/dichvu'
class Room extends PureComponent {
  render() {
    // let a;
    // console.log("hello");
    // axios
    //   .get("https://mighty-coast-18749.herokuapp.com/loaiphongs")
    //   .then(response => {
    //     console.log(response.data);
    //   })
    //   .catch(err => console.log(err));
    return <div>Room mangement</div>;
  } 

}
const mapStateToProps = state => {
    return { 
        phong: state.phong.phong,
        dichvu:state.dichvu.dichvu
    }
}

const mapDispatchToProps = {
    getListPhongRequest, getListDVRequest
}

export default connect(mapStateToProps,mapDispatchToProps)(Room)