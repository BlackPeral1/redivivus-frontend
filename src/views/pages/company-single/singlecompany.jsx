// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { useParams } from 'react-router-dom'
// import Contact from '../../../components/company-contact/Contact'
// import './singlecompany.css'

// function SingleCompany() {
//   const { id } = useParams()

//   const [telephone, setTelephone] = useState('')
//   const [address, setAdderss] = useState('')
//   const [email, setEmail] = useState('')
//   const [view, setView] = useState('')

//   const getCompanyProfile = async () => {
//     const response = await axios.get(`http://localhost:3001/api/company/getcompany/${id}`)

//     if (response.status === 200) {
//       console.log(response)
//       setTelephone(response.data.data.telephone)
//       setAdderss(response.data.data.address)
//       setEmail(response.data.data.email)
//     } else {
//       console.log('Error Occured')
//     }
//   }

//   useEffect(() => {
//     getCompanyProfile()
//   }, [])
//   return (
//     <div>
//       <button onClick={() => setView('contact')}>contact</button>
//       <button>contact</button>
//       <button>contact</button>
//       {view === 'contact' && <Contact telephone={telephone} />}
//     </div>
//   )
// }

// export default SingleCompany


import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Contact from '../../../components/company-contact/Contact'
import About from '../../../components/companyAbout/About'
import './singlecompany.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function SingleCompany() {
  const { id } = useParams()

  const [telephone, setTelephone] = useState('')
  const [address, setAdderss] = useState('')
  const [email, setEmail] = useState('')
  const [about, setAbout] = useState('')
  const [view, setView] = useState('')

  const getCompanyProfile = async () => {
    const response = await axios.get(`http://localhost:3001/api/company/getcompany/${id}`)

    if (response.status === 200) {
      console.log(response)
      setTelephone(response.data.data.telephone)
      setAdderss(response.data.data.address)
      setEmail(response.data.data.email)
      setAbout(response.data.data.about)
    } else {
      console.log('Error Occured')
    }
  }

  useEffect(() => {
    getCompanyProfile()
  }, [])
  return (
    <div>
      <ButtonGroup size="lg" className="company-company-group">
        <Button variant="secondary" className="company-company-group-contact">Home</Button>
        <Button variant="secondary" className="company-company-group-contact"onClick={() => setView('contact')}>Contact</Button>
        <Button variant="secondary" className="company-company-group-contact"onClick={() => setView('about')}>About</Button>
      </ButtonGroup>
      {/* <div className="nav-comapany-bar">
        <button className="company-nav-container" onClick={() => setView('contact')}>
          contact
        </button>
        <button className="company-nav-container" onClick={() => setView('about')}>
          About
        </button>
        <button className="company-nav-container">Home</button>
      </div> */}
      {view === 'contact' && <Contact telephone={telephone} address={address} email={email} />}
      {view === 'about' && <About about={about} />}
    </div>
  )
}

export default SingleCompany

