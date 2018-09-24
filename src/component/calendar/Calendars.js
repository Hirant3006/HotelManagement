import React, { PureComponent } from "react";
import { Calendar } from 'antd'; 
import ReactDOM from 'react-dom'
function onPanelChange(value, mode) {
  console.log(value, mode);
}

  export default class Calendars extends React.Component {
  
    render() {
      
      return (
        <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
        </div>
      );
    }
  }