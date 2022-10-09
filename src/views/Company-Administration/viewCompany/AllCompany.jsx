import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'

import { Button, Table, Container } from 'react-bootstrap'
import './allcompany.scoped.css'

const AllCompany = () => {

  const [company, setCompany] = useState([])


  useEffect(() => {
    getCompany()
  }, [])

  const getCompany = async () => {
    const response = await axios.get('http://localhost:3001/api/company/allcompany')
    if (response.status === 200) {
      setCompany(response.data.data)
     
      console.log(response.data.data)
    }
  }
  
  const deleteCompany = (id) => {
    if (window.confirm("Are you sure?")) {

        fetch('http://localhost:3001/api/company/deletecompany/' + id,
            {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'content-Type': 'application/json'
                }
            })

            .then(console.log("Deleted"))
            .catch(err => console.log(err));
    }
  }
  

  return (
      

<div className='companytable'> 
 <h3 className='main-title-allcompany'>ALL COMPANIES</h3>

<Table striped bordered hover variant="light" className='tableofcontent-company'>
      <thead>
        <tr className='tr-th-allcompany'>
          <th className='thallcompany'>COMPANY NAME</th>
          <th className='thallcompany'>COMPANY EMAIL</th>
          <th className='thallcompany'>ADDRESS</th>
          <th className='thallcompany'>TELEPHONE NUMBER</th>
          <th className='thallcompany'>OPEN TIME</th>
          <th className='thallcompany'>CLOSE TIME</th>
          <th className='thallcompany'>OPEN DAYS</th>
          <th className='thallcompany'>COMPANY SLOGAN</th>
          <th colSpan={3} className='thallcompany'>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
      {company &&
              company.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className='tdallcompany'>{item.name}</td>
                    <td className='tdallcompany'>{item.email}</td>
                    <td className='tdallcompany'>{item.address}</td>
                    <td className='tdallcompany'>{item.telephone}</td>

                    <td className='tdallcompany'>{item.openhour}</td>
                    <td className='tdallcompany'>{item.closehour}</td>
                    <td className='tdallcompany'>{item.opendays}</td>
                    <td className='tdallcompany'>{item.slogan}</td>

                    {/* <td>
                     
                       <Link
                        className="btn btn-warning"
                        to={`/admin/admin-company/companyedit/${item._id}`}
                      >
                        <i className="fa-solid fa-eye"></i>&nbsp;Edit
                      </Link>
                       
                      &nbsp;
                      <a className="btn btn-danger" href="@">
                        <i className="far fa-trash-alt"></i>&nbsp;Delete
                      </a>
                      &nbsp;
                      <Link
                        className="btn btn-success"
                        to={`/admin/admin-company/companyprofile/${item._id}`}
                      >
                        <i className="fa-solid fa-eye"></i>&nbsp;View
                      </Link>
                      &nbsp;
                      
                    </td> */}

                    <td className='tdallcompany'>
                      <Link
                        className="btn btn-success"
                        to={`/admin/admin-company/companyprofile/${item._id}`}
                      >
                        <i className="fa-solid fa-eye"></i>&nbsp;View
                      </Link>
                      &nbsp;
                    </td>
                    <td className='tdallcompany'>  
                      <Link
                        className="btn btn-warning"
                          to={`/admin/admin-company/companyedit/${item._id}`}
                      >
                        <i className="fa-solid fa-eye"></i>&nbsp;Edit 
                      </Link> 
                      </td>

                    <td className='tdallcompany'> 
                      <a className="btn btn-danger" onClick={() => deleteCompany(item._id)}>
                    
                        <i className="far fa-trash-alt"></i>&nbsp;Delete
                      </a>
                      &nbsp;
                      {/* <button  className="btn btn-danger" onClick={() => deleteCompany(item._id)}>Delete</button> */}

                      </td>

                     
                  </tr>
                )
              })}
       
       
       </tbody>
    </Table>

    </div>  
     
   
  )
}

export default AllCompany
