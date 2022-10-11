import axios from 'axios'

const QUERY_BASE_URL = 'http://localhost:3001/api/contactus'

class ContactUsService {
  setQueryDetails(query) {
    return axios.post(QUERY_BASE_URL, query)
  }
}

export default new ContactUsService()
