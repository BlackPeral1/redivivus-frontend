import axios from 'axios'

const QUERY_BASE_URL = 'http://localhost:3001/api/contactus'
const BIN_REQUESTS_QUERY_URL = 'http://localhost:3001/api/pickupRequest'
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
}

export default new BinRequestService()
