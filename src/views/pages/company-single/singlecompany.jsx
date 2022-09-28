import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Contact from '../../../components/company-contact/Contact'

function SingleCompany() {
  const { id } = useParams()

  const [telephone, setTelephone] = useState('')
  const [address, setAdderss] = useState('')
  const [email, setEmail] = useState('')
  const [view, setView] = useState('')

  const getCompanyProfile = async () => {
    const response = await axios.get(`http://localhost:3001/api/company/getcompany/${id}`)

    if (response.status === 200) {
      console.log(response)
      setTelephone(response.data.data.telephone)
      setAdderss(response.data.data.address)
      setEmail(response.data.data.email)
    } else {
      console.log('Error Occured')
    }
  }

  useEffect(() => {
    getCompanyProfile()
  }, [])
  return (
    <div>
      <button onClick={() => setView('contact')}>contact</button>
      <button>contact</button>
      <button>contact</button>
      {view === 'contact' && <Contact telephone={telephone} />}
    </div>
  )
}

export default SingleCompany
