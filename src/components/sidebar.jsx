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
    gap: '15px',
    width: '218px',
    height: '100vh',
    marginLeft: '20px'
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
                padding: '10px',
                cursor: 'pointer',
                borderRadius: '4px',
                color: index === 1 ? 'blue' : '#030229',
                backgroundImage: index === 1 ? "linear-gradient(to right, #EFEEFF 10%, #F8FAFF 50%)" :  'transparent',
                fontFamily: 'Nunito',
                fontSize: '16px'
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
