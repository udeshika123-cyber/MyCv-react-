import React from 'react'
import './App.css'
import MySelf from './components/mySelf.tsx'
import Contact from './components/Contact.tsx'
import Education from './components/Education.tsx'
import Reference from './components/Reference.tsx'
import myPhoto from './assets/myPhoto.jpg'

const App = () => {
  return (
    <>
    <img src={myPhoto} alt="My Photo" style={{width:'100px',height:'100px'}}/>
      <div className='head'><b>Udeshika Dayananda </b><br/></div><div className='h1'><b>University Student<br/>===============================================</b> </div><br/>
      <div className='myDetails'>
      <MySelf country="Sri Lanka" name='K.A.Udeshika Prabhashini' university="SLTC Research University" NicNo="20027030219" gender="Female"address="Hapugahakumbura,Balangoda" hobbies='Reading novels,Watching movies'status='Unmarried'Date_of_birth='2002/07/21'/>
      </div>
      <h1>
        <div className='Contact'><u>Contact</u></div>
      </h1>
      <Contact Phone_Number={+94771234567} Email="udeshikaprabhashini21@gmail.com" LinkedIn="https://www.linkedin.com/in/udeshika-dayananda-1b0a5a1b6/" GitHub="udeshika123-cyber" Facebook="https://www.facebook.com/udeshika.prabhashini.1" Address="Hapugahakumbura,Balangoda"/>

      <h1>
        <div className='title'><u>Education</u></div></h1>
        
        <Education examName1=" - 2021(2022)" examName2="- 2018" examName3="- BSc in Information Technology"/>
      <h1>
        <div className='Reference2'>
          <u>References</u>
        </div>
      </h1>
      <Reference name='Dr.Mohomed Azmeer'
      phone= '+94777348691' email='azmeerm@sltc.ac.lk'company='SLTC Research University'/>
      <br/>
      <Reference name='Dilanka Galagama'
      phone= '+94716351865' email='chathu@123gmail.com'company='IT Instructor-National Youth Corps'/>
    </>
  )
}

export default App
