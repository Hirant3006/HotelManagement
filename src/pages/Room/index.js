import React,{PureComponent} from 'react';
import CustomerCard_Index from '../../component/RoomCard/'
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