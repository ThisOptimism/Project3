import axios from 'axios';

const signup = (username, password, email, nativeLang, targetLang) => {
  return axios.post('/api/auth/signup', { username, password, email, nativeLang, targetLang })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err.response.data;
    })
}

const login = (username, password) => {
  return axios.post('/api/auth/login', { username: username.toLowerCase(), password })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err.response.data;
    })
}

const logout = () => {
  return axios.delete('/api/auth/logout')
    .then(response => {
      return response.data
    })
    .catch(err => {
      return err.response.data
    })
}

export { signup, logout, login };