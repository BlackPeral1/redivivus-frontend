import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import "./css/report.css"
import axios from 'axios'
// import jsPDF from "jspdf";
// import autoTable from 'jspdf-autotable';
import { Button, Table, Container } from 'react-bootstrap'
import './allcompany.css'
// import { FaViber,FaEdit, FaFeatherAlt } from "react-icons/fa";
// import { IconName } from "react-icons/bs";

//print the report(pdf)
// const print = () => {

//     window.print();

// }
const AllCompany = () => {
  // const [query, setQuery] = useState("");
  // const [dat,setDat] = useState([]);
  const [company, setCompany] = useState([])
  // const [searchData,setSearchData] =useState([]);
  // const [filterVal, setFilterVal] = useState('');

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

  // const handleFilter=(e)=>{
  //     if(EventTarget.value ==''){
  //         setEmployee(searchData)
  //     }else{
  //         console.log("Serching")
  //        const filterResult = searchData.filter(employee => employee.designation.toLowerCase().includes(e.target.value.toLowerCase()))
  //        setEmployee(filterResult)
  //     }
  //     setFilterVal(e.target.value)
  // }

  // const generatePdf = () => {
  //     const document = new jsPDF();
  //     const tableColumn = ["USERNAME", "EMAIL", "MOBILE NUMBER", "GENDER", "DESIGNATION","DEPARTMENT","BANK ACCOUNT"];
  //     const tableRows = [];

  //     employee.map((item) => {
  //         const value = [
  //             item.username,
  //             item.email,
  //             item.mobilenumber,
  //             item.gender,
  //             item.designation,
  //             item.department,
  //             item.bankaccount
  //         ];
  //         tableRows.push(value);
  //     });

  //     document.autoTable(tableColumn, tableRows, {startY: 20});

  //     const date = Date().split(" ");
  //     const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];

  //     document.text(`Employee List`, 14, 15);
  //     document.save(`employee_list_${dateStr}.pdf`);
  // }

  // console.log("data",employee)
  return (
    // <div className="company-All-Form" style={{ marginRight: '75px' }}>
    //   <div className="table-container" style={{ marginTop: '50px' }}>
    //     <center>
    //       <div className="all-company-header">All Company List</div>
    //     </center>

    //     <div className="search-box-company" style={{ textAlign: 'right' }}>
    //       <input placeholder="search" />
    //     </div>
    //     <br />
    //     <br />
    //     <a class="btn btn-primary" href="/addstudent">
    //       <i class="fa-solid fa-plus"></i>&nbsp;Create New Company
    //     </a>

    //     <div className="table-company-container">
    //       <Table striped bordered hover>
    //         <thead>
    //           <tr className="styled-table head tr">
    //             <th className="styled-table th">COMPANY NAME</th>
    //             <th className="company-styled-table th" style={{ textAlign: 'center' }}>
    //               EMAIL
    //             </th>
    //             <th className="company-styled-table th" style={{ textAlign: 'center' }}>
    //               ADRESS
    //             </th>
    //             <th className="company-styled-table th" style={{ textAlign: 'center' }}>
    //               TELEPHONE
    //             </th>
    //             <th className="company-styled-table th" style={{ textAlign: 'center' }}>
    //               OPEN HOUR
    //             </th>
    //             <th className="company-styled-table th" style={{ textAlign: 'center' }}>
    //               CLOSE HOUR
    //             </th>
    //             <th className="company-styled-table th" style={{ textAlign: 'center' }}>
    //               OPEN DAYS
    //             </th>
    //             <th className="company-styled-table th" style={{ textAlign: 'center' }}>
    //               SLOGAN
    //             </th>
    //             <th className="company-styled-table th" style={{ textAlign: 'center' }}>
    //               ABOUT
    //             </th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           {company &&
    //             company.map((item, index) => {
    //               return (
    //                 <tr className="company-styled-table tbody tr" key={index}>
    //                   <td>{item.name}</td>
    //                   <td>{item.email}</td>
    //                   <td>{item.address}</td>
    //                   <td>{item.telephone}</td>

    //                   <td>{item.openhour}</td>
    //                   <td>{item.closehour}</td>
    //                   <td>{item.opendays}</td>
    //                   <td>{item.slogan}</td>
    //                   {/* <td>{item.about}</td> */}
    //                   <td className="btn-class-company">
    //                     {/* <a className="btn-btn-warning">
    //                   <FaViber />
    //                   </a>
    //                   <a className="btn-btn-warning">
    //                   <FaEdit />
    //                   </a>
                      
    //                   <i class="fa fa-trash" aria-hidden="true"></i>

    //                   <i class="bi bi-trash"></i> */}
    //                     {/* <a className="btn btn-warning" href={'/admin/admin-company/companyedit'+item._id}>
    //                       <i className="fas fa-edit"></i>&nbsp;Edit
    //                     </a> */}
    //                      <Link
    //                       className="btn btn-warning"
    //                       to={`/admin/admin-company/companyedit/${item._id}`}
    //                     >
    //                       <i className="fa-solid fa-eye"></i>&nbsp;Edit
    //                     </Link>
                         
    //                     &nbsp;
    //                     <a className="btn btn-danger" href="@">
    //                       <i className="far fa-trash-alt"></i>&nbsp;Delete
    //                     </a>
    //                     &nbsp;
    //                     <Link
    //                       className="btn btn-success"
    //                       to={`/admin/admin-company/companyprofile/${item._id}`}
    //                     >
    //                       <i className="fa-solid fa-eye"></i>&nbsp;View
    //                     </Link>
    //                     &nbsp;
    //                   </td>
    //                 </tr>
    //               )
    //             })}
    //         </tbody>
    //       </Table>
    //     </div>
    //     {/* <button className="btn btn-info bbbt mt-2"onClick={generatePdf}>PRINT REPORT</button> */}
    //   </div>
    // </div>


  
   
     

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
                    <td>{item.closehour}</td>
                    <td>{item.opendays}</td>
                    <td>{item.slogan}</td>

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

                    <td>
                      <Link
                        className="btn btn-success"
                        to={`/admin/admin-company/companyprofile/${item._id}`}
                      >
                        <i className="fa-solid fa-eye"></i>&nbsp;View
                      </Link>
                      &nbsp;
                    </td>
                    <td>  
                      <Link
                        className="btn btn-warning"
                        to={`/admin/admin-company/companyedit/${item._id}`}
                      >
                        <i className="fa-solid fa-eye"></i>&nbsp;Edit 
                      </Link></td>

                    <td> 
                      <a className="btn btn-danger" href="@">
                        <i className="far fa-trash-alt"></i>&nbsp;Delete
                      </a>
                      &nbsp;</td>
                    
                  </tr>
                )
              })}
       
       
       </tbody>
    </Table>

    </div>  
     
   
  )
}

export default AllCompany

// telephone
// customers
// centers
// logo
// openhour
// closehour
// opendays
// slogan
// about

// import React, { useEffect, useState } from 'react'
// import DataTable from 'react-data-table-component'
// import Button from 'react-bootstrap/Button'
// import axios from 'axios'
// import { Link } from 'react-router-dom'
// import { confirm } from 'react-confirm-box'

// const AllCompany = () => {
// //   const [search, setSearch] = useState('')
//   // console.log(search)
//   const [company, setCompany] = useState([])
// //   const [filteredFoods, setfilteredFoods] = useState([])
//   // console.log(filteredFoods)
//   const getCompany = async () => {
//     try {
//       const res = await axios.get('http://localhost:3001/api/company/allcompany')
//       setCompany(res.data)
//       console.log(res.data)
//     //   setfilteredFoods(res.data)
//     } catch (err) {
//       alert(err.message)
//     }
//   }
//   useEffect(() => {
//     getCompany()
//   }, [])

// //   useEffect(() => {
// //     // console.log(search)
// //     const result = foods.filter((food) => {
// //       return food.foodName.indexOf(search.toLocaleLowerCase()) > -1
// //     })
// //     setfilteredFoods(result)
// //     // console.log(result)
// //   }, [search])

//   // const componentDidMount = async () => {
//   //   await axios
//   //     .get('http://localhost:8090/api/food')
//   //     .then((response) => response.data)
//   //     .then((data) => {
//   //       this.setState({ empList: data.data })
//   //     })
//   //     .catch((error) => console.log(error.message))
//   // }

// //   const onDelete = async (id) => {
// //     const result = await confirm('Are you sure?', {
// //       closeOnOverlayClick: false,
// //       labels: {
// //         confirmable: 'Confirm',
// //         cancellable: 'Cancel',
// //       },
// //     })

// //     if (result) {
// //       console.log('You click yes!')
// //       await handleDelete(id)
// //       return
// //     }
// //     console.log('You click No!')
// //   }

// //   // Function for Delete
// //   const handleDelete = async (id) => {
// //     await axios
// //       .delete('http://localhost:8090/api/food/delete/' + id)
// //       .then((response) => response.data)
// //       .then((data) => {
// //         window.location.reload(false)
// //       })
// //       .catch((error) => {
// //         alert(error.message)
// //       })
// //   }

//   const columns = [

//     // name
// // email
// // address
// // telephone
// // customers
// // centers
// // logo
// // openhour
// // closehour
// // opendays
// // slogan
// // about

//     { name: 'Food Name', selector: (row) => row.name },
//     { name: 'Food Type', selector: (row) => row.email},
//     { name: 'Price', selector: (row) => row.address},
//     { name: 'Quantity', selector: (row) => row.telephone},
//     { name: 'Quantity', selector: (row) => row.customers },
//     { name: 'Food Name', selector: (row) => row.centers },
//     { name: 'Food Type', selector: (row) => row.logo },
//     { name: 'Price', selector: (row) => row.openhour },
//     { name: 'Quantity', selector: (row) => row.closehour},
//     { name: 'Food Name', selector: (row) => row.opendays },
//     { name: 'Food Type', selector: (row) => row.slogan},
//     { name: 'Price', selector: (row) => row.about },

//     // {
//     //   name: 'Action',
//     //   cell: (row) => (
//     //     <div>
//     //       <Link
//     //         to={`/food-management/editfood/${row._id}`}
//     //         className={'btn btn-primary btn-sm btn-block mt-1 mb-1'}
//     //       >
//     //         EDIT
//     //       </Link>
//     //       <Button
//     //         className="btn btn-danger btn-sm btn-block mt-1 mb-1"
//     //         onClick={() => {
//     //           onDelete(row._id)
//     //         }}
//     //       >
//     //         Delete
//     //       </Button>
//     //     </div>
//     //   ),
//     // },
//   ]

//   return (
//     <>
//       <DataTable
//         title="Food Details"
//         columns={columns}
//         // data={filteredFoods}
//         // pagination
//         // fixedHeader
//         // fixedHeaderScrollHeight="450px"
//         // // selectableRows
//         // selecttableRowsHighlighted
//         // highlightOnHover
//         // actions={
//         //   <div>
//         //     <Button className="btn btn-info btn-sm">Export</Button>
//         //     <Link to={`/food-management/addfood`} className="btn btn-primary btn-sm">
//         //       +Add Item
//         //     </Link>
//         //   </div>
//         // }
//         // subHeader
//         // subHeaderComponent={
//         //   <input
//         //     type="text"
//         //     className="w-25 form-control"
//         //     placeholder="Search here"
//         //     value={search}
//         //     onChange={(e) => setSearch(e.target.value)}
//         //   />
//         // }
//       />
//     </>
//   )
// }
// export default AllCompany
