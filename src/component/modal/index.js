import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'antd';
import ShowModal from './ShowModal'


export default class index extends Component {
    render() {
        return (
            <div>
                <ShowModal/>
            </div>
        );
    }
}

