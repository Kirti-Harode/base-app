import React, { Component } from 'react';
import blueBaseLogo from '../assets/blueBaseLogo.png';
import Notification from '../assets/Notification.png';
import Dashboard from '../assets/Dashboard.png';
import Invoice from '../assets/Invoice.png';
import Setting from '../assets/Setting.png';
import Calendar from '../assets/Calendar.png';
import Schedule from '../assets/Schedule.png';
import Upload from '../assets/Upload.png';

const styles = {
  sidebar: {
    backgroundColor: 'white',
    height:' 100%', 
    width: '218px', 
    position: 'fixed', 
    zIndex: 1,
    top: 0, 
    left: 0,
    overflowX: 'hidden',
    paddingTop: '10px',
  }
}

const menuitems = [
  {
    name: 'Dashboard',
    icon: <img src={Dashboard} style={{width: '20px'}} alt=''></img>
  },
  {
    name: 'Upload',
    icon: <img src={Upload} style={{width: '20px'}}alt=''></img>
  },
  {
    name: 'Invoice',
    icon: <img src={Invoice} style={{width: '20px'}}alt=''></img>
  },
  {
    name: 'Schedule',
    icon: <img src={Schedule} style={{width: '20px'}}alt=''></img>
  },
  {
    name: 'Calendar',
    icon: <img src={Calendar} style={{width: '20px'}}alt=''></img>
  },
  {
    name: 'Notification',
    icon: <img src={Notification} style={{width: '20px'}}alt=''></img>
  },
  {
    name: 'Settings',
    icon: <img src={Setting} style={{width: '20px'}}alt=''></img>
  },
];

export default class Sidebar extends Component {
  render() {
    return (
      <div style={styles.sidebar}>
        <div style={{width:'200px', marginBottom: '20px', marginTop: '10px'}}>
          <img src={blueBaseLogo} alt=''></img>
        </div>
        <div>
        {
          menuitems.map((item, index) => (
            <div style={{ 
                display: 'flex', 
                gap: '20px',
                padding: '15px 0px 15px 30px',
                cursor: 'pointer',
                borderRadius: '4px',
                color: index === 1 ? '#605BFF' : '#030229',
                background: index === 1 ? 'linear-gradient(90deg, #ACA9FF 0%, rgba(172, 169, 255, 0.04) 90%)' :  'transparent',
                fontFamily: 'Nunito',
                fontSize: '16px',
              }}
              key={index}
            >
              <div >{item.icon} </div>
              <div >{item.name}</div>
            </div>
          ))
        }
        </div>
      </div>
    )
  }
}
