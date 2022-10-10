import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { useParams } from 'react-router-dom'

import { Button, Table, Container } from 'react-bootstrap'
import './companyProfile.scoped.css'

const CompanyProfile = () => {
  // const dummyData = [
  //   {
  //     id: 1,
  //     name: "Ravindu Nirmal",
  //     email: "test@gmail.com",
  //   },
  //   {
  //     id: 2,
  //     name: "Test 1",
  //     email: "test@gmail.com",
  //   },
  //   {
  //     id: 3,
  //     name: "Test 2",
  //     email: "test@gmail.com",
  //   },
  //   {
  //     id: 4,
  //     name: "Test 3",
  //     email: "test@gmail.com",
  //   },
  //   {
  //     id: 5,
  //     name: "Test 4",
  //     email: "test@gmail.com",
  //   },
  // ];

  const { id } = useParams()
  console.log(id)

  // const [companyprofile, setCompanyprofile] = useState({});

  const [name, setName] = useState('')
  const [telephone, setTelephone] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [centers, setCenters] = useState('')
  const [openhour, setOpenhour] = useState('')
  const [closehour, setClosehour] = useState('')
  // const [opendays, setOpendays] = useState('')
  const [slogan, setSlogan] = useState('')
  const [about, setAbout] = useState('')
  // const [filteredData, setfilteredData] = useState([]);

  const getCompanyProfile = async () => {
    const response = await axios.get(`http://localhost:3001/api/company/getcompany/${id}`)
    if (response.status === 200) {
      setName(response.data.data.name)
      setTelephone(response.data.data.telephone)
      setEmail(response.data.data.email)
      setAddress(response.data.data.address)
      setCenters(response.data.data.centers)
      setOpenhour(response.data.data.openhour)
      setClosehour(response.data.data.closehour)
      setSlogan(response.data.data.slogan)
      setAbout(response.data.data.about)

      console.log(response.data.data)
    } else {
      console.log('Error Occured')
    }
  }

  useEffect(() => {
    getCompanyProfile()
  }, [id])

  return (
    // <div>
    //   <div className="company-profile-form-data">
      
    //     <div className="compo-div-form">
    //       <div className="company-profile-header">Company Profile</div>

    //       <div className="container-div-company-form">
    //         Company Name
    //         <div className="comapny-labels-div">{name}</div>
    //       </div>

    //       <div className="container-div-company-form">
    //         Company Email
    //         <div className="comapny-labels-div">{email}</div>
    //       </div>

    //       <div className="container-div-company-form">
    //         Company Telephone
    //         <div className="comapny-labels-div">{telephone}</div>
    //       </div>

    //       <div className="container-div-company-form">
    //         Company Address
    //         <div className="comapny-labels-div">{address}</div>
    //       </div>

    //       <div className="container-div-company-form">
    //         Company Centers
    //         <div className="comapny-labels-div">{centers}</div>
    //       </div>

    //       <div className="container-div-company-form">
    //         Open Hour
    //         <div className="comapny-labels-div">{openhour}</div>
    //       </div>

    //       <div className="container-div-company-form">
    //         Close Hour
    //         <div className="comapny-labels-div">{closehour}</div>
    //       </div>

    //       <div className="container-div-company-form">
    //         Company Slogan
    //         <div className="comapny-labels-div">{slogan}</div>
    //       </div>

    //       <div className="container-div-company-form">
    //         Company About
    //         <div className="comapny-labels-div">{about}</div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  <div className='companyprofile-row'>  
     <h2 className='main-title-companyprofile'>Company Profile</h2>
    <div className='profile-container'>
     
      <div className='profile-container1'>
       <div className='company-label-bar-profile'>
         <div className='label-company-profile'>Company Name</div>
         <div className='label-company-profile1'>{name}</div>
       </div>
       <div className='company-label-bar-profile'>
         <div className='label-company-profile'>Company Email</div>
         <div className='label-company-profile1'>{email}</div>
       </div>
       <div className='company-label-bar-profile'>
         <div className='label-company-profile'> Phone Number</div>
         <div className='label-company-profile1'>{telephone}</div>
       </div>
     
       <div className='company-label-bar-profile'>
         <div className='label-company-profile'>  Open Hour</div>
         <div className='label-company-profile1'>{openhour}</div>
       </div>
       <div className='company-label-bar-profile'>
         <div className='label-company-profile'> Company Slogan</div>
         <div className='label-company-profile1'>{slogan}</div>
       </div>
       
          
      </div>

      <div className='profile-container1'>
      <div className='company-label-bar-profile'>
         <div className='label-company-profile'> Company Address</div>
         <div className='label-company-profile1'>{address}</div>
       </div>
       <div className='company-label-bar-profile'>
         <div className='label-company-profile'>No Of Centers</div>
         <div className='label-company-profile1'>{centers}</div>
       </div>
       <div className='company-label-bar-profile'>
         <div className='label-company-profile'>Close Hour</div>
         <div className='label-company-profile1'>{closehour}</div>
       </div>
       <div className='company-label-bar-profile-label'>
         <div className='label-company-profile-about'>Company About</div>
         <div className='field-company-profile1-about'>{about}</div>
       </div>
       <div className='image-companyprofile'>
       <img className='image-companyprofile-img'
          src="
          https://previews.123rf.com/images/chudtsankov/chudtsankov1607/chudtsankov160700278/61547748-happy-green-recycle-bin-cartoon-mascot-character-waving-for-greeting-illustration-isolated-on-white-.jpg"
          alt=""
        />
       </div>
      </div>
    </div>
    </div>
  )
}

export default CompanyProfile
