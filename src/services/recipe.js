import axios from 'axios'
const baseUrl = '/recipe'

const add = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

const remove = async credentials => {
  const response = await axios.delete(baseUrl, credentials)
  return response.data
}

export default { add, remove }