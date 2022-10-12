import axios from 'axios'
//http://localhost:3001/api/paymentmethod/
const QUERY_BASE_URL = 'http://localhost:3001/api/contactus'
const BIN_REQUESTS_QUERY_URL = 'http://localhost:3001/api/binrequests'
//http://localhost:3001/api/binrequests/getbinrequest/REQ09870
class BinRequestService {
  setQueryDetails(query) {
    return axios.post(QUERY_BASE_URL, query)
  }
  getAllBinreuests() {
    return axios.get(BIN_REQUESTS_QUERY_URL)
  }
  getOneBinRequest(binRequestId) {
    return axios.get(BIN_REQUESTS_QUERY_URL + '/getbinrequest/' + binRequestId)
  }
  updatePaymentMethod(id, form) {
    axios.patch(`http://localhost:3001/api/paymentmethod/${id}`, form)
  }
  addPaymentMethod(query) {
    axios.post(`http://localhost:3001/api/paymentmethod`, query)
  }
  getOnePaymentMethod(id) {
    axios.get(`http://localhost:3001/api/paymentmethod/${id}`)
  }
  deletePaymentMethod(id) {
      axios.delete(`http://localhost:3001/api/paymentmethod/${id}`)
  }
}

export default new BinRequestService()
