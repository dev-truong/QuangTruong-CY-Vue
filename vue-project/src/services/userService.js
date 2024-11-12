import { get, del, post } from '@/services/service.js'

function getUsers() {
  return get('users')
}

// function addUser(data) {
//   return post('users', data)
// }

function login(data) {
  return post('', data)
}
export const userService = {
  getUsers,
  // addUser,
  login
}
