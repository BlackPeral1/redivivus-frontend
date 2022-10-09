
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Contact from '../../../components/company-contact/Contact'
import About from '../../../components/companyAbout/About'
import CompanyHome from '../../../components/company-home/CompanyHome'
import './singlecompany.scoped.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function SingleCompany() {
  const { id } = useParams()

  const [telephone, setTelephone] = useState('')
  const [address, setAdderss] = useState('')
  const [email, setEmail] = useState('')
  const [about, setAbout] = useState('')
  const [openhour, setOpenhour] = useState('')
  const [closehour, setClosehour] = useState('')
  const [centers , setCenters] = useState('')
  const [slogan , setSlogan] = useState('')
  const [view, setView] = useState('')

  const getCompanyProfile = async () => {
    const response = await axios.get(`http://localhost:3001/api/company/getcompany/${id}`)

    if (response.status === 200) {
      console.log(response)
      setTelephone(response.data.data.telephone)
      setAdderss(response.data.data.address)
      setEmail(response.data.data.email)
      setAbout(response.data.data.about)
      setOpenhour(response.data.data.openhour)
      setClosehour(response.data.data.closehour)
      setCenters(response.data.data.centers)
      setSlogan(response.data.data.slogan)
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
        <Button variant="secondary" className="company-company-group-contact" onClick={() => setView('home')}>Home</Button>
        <Button variant="secondary" className="company-company-group-contact"onClick={() => setView('contact')}>Contact</Button>
        <Button variant="secondary" className="company-company-group-contact"onClick={() => setView('about')}>About</Button>
      </ButtonGroup>
   
      {view === 'contact' && <Contact telephone={telephone} address={address} email={email} openhour={openhour} closehour={closehour} />}
      {view === 'about' && <About about={about} />}
      {view === 'home' && <CompanyHome about={about}/>}
    </div>
  )
}

export default SingleCompany

