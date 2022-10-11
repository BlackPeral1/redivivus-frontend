import axios from 'axios'

const PAYMENT_BASE_URL = 'http://localhost:3001/api/makePayment'
const PAYMENT_METHOD_BASED_URL = 'http://localhost:3001/api/paymentmethod/'

class PaymentService {
  makePayment(query) {
    return axios.post(PAYMENT_BASE_URL, query)
  }
  getAllPaymentMethod() {
    return axios.get(PAYMENT_METHOD_BASED_URL)
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
}

export default new PaymentService()
