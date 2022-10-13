import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import axios from 'axios'
import './companyall.scoped.css'
import { TopNav } from '../../../components'
const AllCompany = () => {

  const [company, setCompany] = useState([])


  useEffect(() => {
    getCompany()
  }, [])

  const getCompany = async () => {
    const response = await axios.get('http://localhost:3001/api/company/allcompany')
    if (response.status === 200) {
      setCompany(response.data.data)
      // setSearchData(response.data.data);
      console.log(response.data.data)
    }
  }

  return (

  <div>
  <TopNav />
<div className='companyall-heading'>Buyer Companies</div>

<div className='card-item-container'>      
      {company &&
              company.map((item, index) => {
                return (
                  // <div key={index}>
                  //   <div className='tdallcompany'>{item.name}</div>
                  //   <div className='tdallcompany'>{item.email}</div>
                  //   <div className='tdallcompany'>{item.address}</div>
                  //   <div className='tdallcompany'>{item.telephone}</div>

                  //   <div className='tdallcompany'>{item.openhour}</div>
                  //   <div>{item.closehour}</div>
                  //   <div>{item.opendays}</div>
                  //   <div>{item.slogan}</div>
               
       
    <div className="container">
      
    <div className="header-container">
      <img className='image-comapnyall'
        src={item.logo}
        alt=""
      />
    </div>

    <div className="footer-container">
      <div className="footer-icons">
        <div className="footer-icons-left">
          <div className="footer-icons-left-1">
            {" "}
            <FontAwesomeIcon icon="fa-solid fa-phone" />
          </div>

          <div className="footer-icons-left-2">
            {" "}
            {/* <FaAtlas /> */}
            <FontAwesomeIcon icon="fa-solid fa-phone" />
          </div>
        </div>

        <div className="footer-icons-right">
          {/* <AiFillLike/> */}
          <FontAwesomeIcon icon="fa-solid fa-phone" />
        </div>
      </div>

      <div className="description">
        <span>{item.name}</span>
      </div>
      <div className="description">
        <span>+{item.centers} Centers</span>
      </div>
      
      <div className="more-details-btn">
       <a href={`/company/${item._id}`}><button>For More Details</button></a> 
      </div>
    </div>
  </div>
  
  
  
                
       
                )
              })}
 
 </div>  
     
  </div>

  
   
  )
}

export default AllCompany

