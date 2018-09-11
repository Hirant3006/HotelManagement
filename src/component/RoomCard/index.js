import React, { PureComponent } from "react";
//import { connect, Provider } from 'react-redux';

import CustomerCard from './RoomCard'
import CustomerCard_Data from '../../data/CustomerCard_Data.json'
export default class App extends PureComponent {
  render() {
    return (
     // <Provider store={store}>
    <div>
   
    <div className="row">
                            <div className="col-md-4" >
                                {CustomerCard_Data.map((value, Number) => {
                                    return (
                                        <div className="row wow animated fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
                                            <CustomerCard Number={Number.value} Type={value.Type} Status={value.Status} />
                                        </div>

                                    )
                                })

                                }
                            </div>
                            </div>
    </div>
    //</Provider>
    )
  }
}
