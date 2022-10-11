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
}

export default new PaymentService()
