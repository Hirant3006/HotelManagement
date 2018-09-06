import React,{PureComponent} from 'react';
import CustomerCard_Index from '../../component/customer_card/CustomerCard_Index'
export default class Room extends PureComponent {
    render() {
        return (
            <div>
                Room mangement
               <CustomerCard_Index/>
            </div>
        )
    }
}