import axios from 'axios'


const BIN_REQUESTS_QUERY_URL = 'http://localhost:3001/api/pickupRequest'
//http://localhost:3001/api/binrequests/getbinrequest/REQ09870

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.token}`,
  },
};

class BinRequestService {

  getAllBinreuests() {
    return axios.get(BIN_REQUESTS_QUERY_URL, config)
  }
  getOneBinRequest(binRequestId) {
    return axios.get(BIN_REQUESTS_QUERY_URL + '/' + binRequestId, config)
  }
}

export default new BinRequestService()
