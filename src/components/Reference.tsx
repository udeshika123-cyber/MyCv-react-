import React from 'react'
import './Reference.css'

interface ReferenceProps {
    name: string;
    email: string;
    phone: string;
    company: string;
}
const Reference = ({name,email,phone,company}:ReferenceProps) => {
  return (
    <div className='Reference'>
        <h1>
            Name: {name}<br/>
            Email: {email}<br/>
            Phone: {phone}<br/>
            Company: {company}
        </h1>
    </div>
  )
}

export default Reference