import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import img from '../assets/01.jpg';

const IntroText = styled.div`
background-color: rgba(255,255, 255, 0.8);
position : absolute; 
top: 200px; 
left: 20vw; 
width: 60vw; 
padding: 20vh;
border-radius: 6px;
`;

const LoggedInText = styled.div`
background-color: rgba(255,0, 0, 0.8);
color: 'yellow';
position : absolute; 
top: 200px; 
left: 20vw; 
width: 60vw; 
padding: 20vh;
border-radius: 6px;
`;



const HomePage = ({ currentUser }) => {
    return ( 

       <React.Fragment>
            <div style={{width: '100vw', height: '90vh'}}>
                <img src={img} alt="" className="w-100 h-100"/>
            </div>
            {!currentUser ? (
            <IntroText>
            <p>You know why you're here.  Click the login button in the header and let's do this.</p>
        </IntroText>
             ) : (
                 <LoggedInText>
             <p style={{color: 'yellow'}}> hello { currentUser}.  thanks for logging in.</p>   
                </LoggedInText>
             )
            }

        </React.Fragment>
     );
}
 

const mapStateToProps = state => ({
    currentUser : state.currentUser,
})

export default connect(mapStateToProps)(HomePage);