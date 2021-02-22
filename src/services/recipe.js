import axios from 'axios'
const baseUrl = '/recipe'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}
const get = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}
const scrape = async credentials => {
  const response = await axios.post(`${baseUrl}/scrape`, credentials)
  return response.data
}

const add = async credentials => {
  const config = {
    headers: { Authorization: token }
  }

  const response = await axios.post(`${baseUrl}/add`, credentials,  config)
  return response.data
}

const remove = async credentials => {
  const config = {
    headers: { Authorization: token }
  }

  const response = await axios.delete(`${baseUrl}/remove`, credentials, config)
  return response.data
}

export default { setToken, get, scrape, add, remove }