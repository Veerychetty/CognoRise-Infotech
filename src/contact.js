import React, { useState } from 'react'
import './contact.css'

const Contact = () => {
  
  const[userData,setUserData]= useState({
    Name:'' ,Email:'',Subject:'',message:''
  }
  )
  let name,value
  console.log(userData)
  const data = (e)=>{
    name =e.target.name
    value =e.target.value
    setUserData({...userData,[name]:value})


  }
  const send =async(e)=>{
    const{Name,Email,Subject,message} = userData
    e.preventDefault();
    const option={
      method:'post',
      header:{
      'Content-type':'aplication/json'
      },
      body : JSON.stringify({
        Name,Email,Subject,message

      })

    }
    const res = await fetch('https://contact-me-fc2f0-default-rtdb.firebaseio.com//Measage.json',option)
    console.log(res)
    if(res)
    {
      alert("Message Sent")
    }
  }
  return (
    <>
    <div className ="container">
        <div className='contact_box'>
          <h3>Contact Me </h3>
            <form method='post'>
                <input id='gg' type='text' name='Name' value={userData.Name} placeholder='Enter your name' autoComplete='off'onChange={data}></input>
                <input id='gg' type='Email' name='Email' value={userData.Email} placeholder='Enter your Email' autoComplete='off'onChange={data}></input>
                <input id='gg' type='text' name='Subject' value={userData.Subject} placeholder='What you need to ask' autoComplete='off'onChange={data}></input>
                <textarea value={userData.message} name='message'placeholder='your message'autoComplete='off'onChange={data}></textarea>
                <button id='ff' onClick={send}>Send</button>
                             

            </form>

        </div>
       

        




    </div>
    </>
  )
}

export default Contact;