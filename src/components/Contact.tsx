import React from 'react'
import './Contact.css'

interface ContactProps {
    Phone_Number: number;
    Email: string;
    LinkedIn: string;
    GitHub: string;
    Facebook: string;
    Address: string;
}
const Contact = ({Phone_Number,Email,LinkedIn,GitHub,Facebook,Address}:ContactProps) => {
  return (
    <div className='Contact1'>
    <h2>Phone Number: {Phone_Number}<br/>Email: {Email}<br/>LinkedIn: {LinkedIn}<br/> GitHub: {GitHub}<br/> Facebook: {Facebook}<br/>Address: {Address}</h2>
    </div>
  )
}

export default Contact