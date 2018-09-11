import React,{PureComponent} from 'react';
import CustomerCard_Index from '../../component/RoomCard/'
import BasicLayout from '../../layouts/BasicLayout'
import { Layout, Breadcrumb } from "antd";
import RoomTabs from '../../component/tabs/RoomTabs'
const Sroom =[
{"_id":"5b94986892bf312fe4c4b729",
 "TenLoai":"Phòng đôi",
 "DonGia":100000,"__v":0
},
{"_id":"5b94986892bf312fe4c4b72b",
 "TenLoai":"Phòng VIP",
  "DonGia":150000,"__v":0
},
{"_id":"5b94986892bf312fe4c4b72a",
 "TenLoai":"Phòng Đơn","DonGia":80000,"__v":0
},
{"_id":"5b95b529f2b348128caef66e",
 "TenLoai":"Phòng VIP2",
  "DonGia":500000,"__v":0
},
{"_id":"5b95b3ebf2b348128caef66d",
 "__v":0,"DonGia":150000,
  "TenLoai":"Phòng tình yêu"
}
]
export default class Room extends PureComponent {
    render() {
        return (
            <div>
               <RoomTabs SRoom = {Sroom}/>
             
            </div>
        )
    }
}