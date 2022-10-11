import axios from 'axios'


const BIN_REQUESTS_QUERY_URL = 'http://localhost:3001/api/pickupRequest'
//http://localhost:3001/api/binrequests/getbinrequest/REQ09870
class BinRequestService {

  getAllBinreuests() {
    return axios.get(BIN_REQUESTS_QUERY_URL)
  }
  getOneBinRequest(binRequestId) {
    return axios.get(BIN_REQUESTS_QUERY_URL + '/' + binRequestId)
  }
}

export default new BinRequestService()
