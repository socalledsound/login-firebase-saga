import React from 'react'
import styled from 'styled-components';
import { withRouter, NavLink } from 'react-router-dom';
import cloud from '../assets/mario-cloud.png';

const Logo = styled.img`
width: 80px;
height: 80px;
padding-top: 0px;
// border: 1px solid white;
margin: 0;
`;


const Header = () => {
    return ( 
        <div style={{height: '130px'}}>
        <nav className='dt w-100 mw8 h2 center'>
            <div className="dtc v-mid pa3">
                <a href="/" className="dib w5 ba b--white-90 hiver-blue border-box">
                <Logo src={cloud} alt=""/>
                </a>
            </div>
            <div className="dtc v-mid tr pa3"> 
              
              <NavLink to="/login" className="f6 fw4 hover-blue no-underline black-70 dn dib-ns pv2 ph3">login</NavLink>
              
            </div>
            
        </nav>
        </div>
     );
}
 
export default withRouter(Header);


// <nav class="dt w-100 mw8 center"> 
//         <div class="dtc w2 v-mid pa3">
//           <a href="/" class="dib w2 h2 pa1 ba b--white-90 grow-large border-box">
//             <svg class="link white-90 hover-white" data-icon="skull" viewBox="0 0 32 32" style="fill:currentcolor"><title>skull icon</title><path d="M16 0 C6 0 2 4 2 14 L2 22 L6 24 L6 30 L26 30 L26 24 L30 22 L30 14 C30 4 26 0 16 0 M9 12 A4.5 4.5 0 0 1 9 21 A4.5 4.5 0 0 1 9 12 M23 12 A4.5 4.5 0 0 1 23 21 A4.5 4.5 0 0 1 23 12"></path></svg>
//           </a>
//         </div>
//         <div class="dtc v-mid tr pa3">
//           <a class="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="/" >How it Works</a> 
//           <a class="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="/" >Pricing</a> 
//           <a class="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" href="/" >About</a> 
//           <a class="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" href="/" >Careers</a> 
//           <a class="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba" href="/" >Sign Up</a> 
//         </div>
//       </nav> 