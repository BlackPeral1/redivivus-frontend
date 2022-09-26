import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { useParams } from 'react-router-dom'

import { Button, Table, Container } from 'react-bootstrap'
import './companyProfile.css'

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
    //     <div className style={{marginRight:"100px"}}>
    //     <div className = "container" style ={{marginTop:"50px"}}>

    //      <center>
    //      <h4 className='header'>CROWN HOTEL EMPLOYEE LIST</h4>
    //      </center><br></br>

    //     <h8 className style={{marginLeft:"100px"}}>YEAR:2022</h8>
    //     <h8 className style={{marginLeft:"260px"}}> EMPLOYEE WITH DESIGNATION</h8>
    //     {/* <div className='searchopt'>
    //       <input placeholder='search' value={filterVal} onInput={(e) =>handleFilter(e)} />
    //   </div> */}

    //   <Table striped bordered hover>
    //     <thead >
    //     <tr className='styled-table tbody tr'>
    //     <th className='styled-table th' style={{textAlign:"center"}}>ComppanyNAME</th>
    //     <th className='styled-table th' style={{textAlign:"center"}}>EMAIL</th>
    //     <th className='styled-table th' style={{textAlign:"center"}}>ADRESS</th>
    //     <th className='styled-table th' style={{textAlign:"center"}}>GENDER </th>
    //     <th className='styled-table th' style={{textAlign:"center"}}>LANDLINE</th>
    //     <th className='styled-table th' style={{textAlign:"center"}}>DESIGNATION</th>
    //     <th className='styled-table th' style={{textAlign:"center"}}>DEPARTMENT</th>
    //     <th className='styled-table th' style={{textAlign:"center"}}>BANKACCOUNT</th>
    //     <th className='styled-table th' style={{textAlign:"center"}}>LANDLINE</th>
    //     <th className='styled-table th' style={{textAlign:"center"}}>DESIGNATION</th>
    //     <th className='styled-table th' style={{textAlign:"center"}}>DEPARTMENT</th>
    //     <th className='styled-table th' style={{textAlign:"center"}}>BANKACCOUNT</th>

    //     </tr>
    //     </thead>
    //     <tbody>
    //     {companyprofile && companyprofile.map((item,index)=>{
    //         return(
    //             <tr className='styled-table tbody tr' key={index}>

    //             <td>{item.name}</td>
    //             <td>{item.email}</td>
    //             <td>{item.address}</td>
    //             <td>{item.telephone}</td>
    //             <td>{item.customers}</td>
    //             <td>{item.logo}</td>
    //             <td>{item.openhour}</td>
    //             <td>{item.closehour}</td>
    //             <td>{item.opendays}</td>
    //             <td>{item.slogan}</td>
    //             <td>{item.about}</td>

    //             </tr>
    //         )
    //     })}
    //     </tbody>
    //     </Table>
    //     {/* <button className="btn btn-info bbbt mt-2"onClick={generatePdf}>PRINT REPORT</button> */}
    //     </div>
    //     </div>

    <div>
      <div className="company-profile-form-data">
        {/* <div className='sub_container1'>
          <label className='sub_container3'>Company Name</label>
          <div className="sub_container2">{name}</div>
        </div> */}
        {/* 
        <label>Comapny Name</label>
        <div className='container2'>{name}</div> */}

        {/* <div className="sub_container1">
          <div className="sub_container2">{telephone}</div>
        </div>

        <div className="sub_container1">
          <div className="sub_container2">{email}</div>
        </div>

        <div className="sub_container1">
          <div className="sub_container2">{address}</div>
        </div>

        <div className="sub_container1">
          <div className="sub_container2">{openhour}</div>
        </div>

        <div className="sub_container1">
          <div className="sub_container2">{closehour}</div>
        </div>

        <div className="sub_container1">
          <div className="sub_container2">{slogan}</div>
        </div>
        <div className="sub_container1">
          <div className="sub_container2"> {about}</div>
        </div> */}

        {/* <div className='container-div'>
          <div className='container-div2'>Company name</div>
          <div className='container-div3'>{name}</div>
        </div> */}

        {/* <ul>
          <div></div>
          <li> Company Name         :    {name}</li>
        </ul> */}

        <div className="compo-div-form">
          <div className="company-profile-header">Company Profile</div>

          <div className="container-div-company-form">
            Company Name
            <div className="comapny-labels-div">{name}</div>
          </div>

          <div className="container-div-company-form">
            Company Email
            <div className="comapny-labels-div">{email}</div>
          </div>

          <div className="container-div-company-form">
            Company Telephone
            <div className="comapny-labels-div">{telephone}</div>
          </div>

          <div className="container-div-company-form">
            Company Address
            <div className="comapny-labels-div">{address}</div>
          </div>

          <div className="container-div-company-form">
            Company Centers
            <div className="comapny-labels-div">{centers}</div>
          </div>

          <div className="container-div-company-form">
            Open Hour
            <div className="comapny-labels-div">{openhour}</div>
          </div>

          <div className="container-div-company-form">
            Close Hour
            <div className="comapny-labels-div">{closehour}</div>
          </div>

          <div className="container-div-company-form">
            Company Slogan
            <div className="comapny-labels-div">{slogan}</div>
          </div>

          <div className="container-div-company-form">
            Company About
            <div className="comapny-labels-div">{about}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyProfile
