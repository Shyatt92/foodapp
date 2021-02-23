import axios from 'axios'

const baseUrl = '/users'

const signUp = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

const signUpDelete = async () => {
  await axios.delete(baseUrl)
  return
}

export default { signUp, signUpDelete }