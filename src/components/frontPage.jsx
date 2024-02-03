import React from "react";
import appLogo from '../assets/appLogo.png';
import {SignIn} from "./signIn";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoDiscord } from "react-icons/io5";
class FrontPage extends React.Component {
  render () {
    return(
      <div style={{
        backgroundImage: "linear-gradient(96deg, #605BFF 50%, #F8FAFF 50%)",
        padding: "0 20px",
        width:'100%',
        height: '100vh'
      }}>
				<div style={{display: 'flex', maxWidth: '100%'}}>
					<img src={appLogo} alt=''></img>
				</div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
          <div style={{
            display:'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            rowGap: '280px',
            marginTop: '20%',
            marginLeft: '100px'
          }}>
            <h1 style={{
              fontSize: '72px',
              fontFamily: 'Montserrat',
              fontWeight: 700,
              lineHeight: '88px',
              letterSpacing: '0em',
              textAlign: 'left',
              color: '#FFFFFF',
            }}>
              BASE
            </h1>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '30px',
              color: '#FFFFFF',

            }}>
              <a href="https://github.com/Kirti-Harode" target='_blank' rel="noopener noreferrer" ><AiOutlineGithub /></a>
              <a href="https://twitter.com/harode13345" target='_blank' rel="noopener noreferrer"><AiFillTwitterCircle /></a>
              <a href="https://www.linkedin.com/in/kirti-harode/" target='_blank' rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://discord.com/" target='_blank' rel="noopener noreferrer"> <IoLogoDiscord /></a>
            </div>
          </div>
          <div>
            <SignIn />
          </div>
        </div>
      </div>
    )
  }
}

export default FrontPage;