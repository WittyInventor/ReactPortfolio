import React from 'react';
import { useState } from 'react';
import background from '../../Assets/DarkerYellowPic.jpg';

function Contact() {
    const [alertmessage, setalertmessage]=useState('')
    const [name, setname] =useState('')
    const [email, setemail]=useState('')
    const [usermessage, setusermessage]=useState('')

    function handleNameChange(e) {
        setname(e.target.value)
    }

    function handleEmailChange(e) {
        setemail(e.target.value)
    }

    function handleusermessagechange(e) {
        setusermessage(e.target.value)
    }
    function handleBlurName(){
        console.log(name)
        if (name==""){
            setalertmessage("name is required")
        } 
        else {
            setalertmessage ("")
        }
    }

    function handleBlurEmail(){
        // the regex code test is below
        let re = /^(([^<>()[\]\\.,;:\s@"]+(.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (email==""){
            setalertmessage("email is required")
        } 
        // the code below means that if the regex does not pass, it would send an alert message to the user
        else if(!re.test(email)){
            setalertmessage("email is not valid")
        }
        else {
            setalertmessage ("")
        }
    }

    
         

    function handleBlurusermessage(){
        console.log(usermessage)
        if (usermessage==""){
            setalertmessage("user message is required")
        } 
        else {
            setalertmessage ("")
        }
    }



    return (
        <div 
        style={{ backgroundImage: `url(${background})`,backgroundRepeat:"no-repeat", backgroundSize: "cover"}}
        className="contactMainContainer">
            <div className="contactFormContainer">

            <h4>Contact</h4>

            <p className="contactFormLabel">Name</p>

            <input type="text" value = {name}onChange={handleNameChange} onBlur={handleBlurName}/>

            <p className="contactFormLabel">Email Address</p>

            <input type="email" value = {email} onChange={handleEmailChange}onBlur={handleBlurEmail}/>

            <p className="contactFormLabel">Message</p>

            <textarea value = {usermessage}onChange={handleusermessagechange}onBlur={handleBlurusermessage}></textarea>

            <p className="contactFormAlert">{alertmessage}</p>

            <button>Submit</button>
            </div>
        </div>
    );
}

export default Contact;

