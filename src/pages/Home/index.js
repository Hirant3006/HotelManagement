import React,{PureComponent} from 'react';
import { connect } from "react-redux";
import { getListPhongRequest } from '../../actions/phong'
import dichvu from '../../reducers/dichvu';
import { getListDVRequest } from '../../actions/dichvu'
class Home extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        console.log('component did mount')
        this.props.getListPhongRequest();
        this.props.getListDVRequest();
    }
    render() {
        console.log(this.props);

        return (
            <div>
                Homepages
            </div>
        )
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

export default connect(mapStateToProps,mapDispatchToProps)(Home)