
import axios from 'axios'

const service = {}

// public methods
service.get = (url) => {
  return axios.get(url)
}

export default service
