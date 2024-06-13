import axios from "axios";
import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      email: localStorage.getItem('user_email') || ''
    },
    accessToken: localStorage.getItem('access_token') || null, // makes sure the user is logged in even after
    refreshToken: localStorage.getItem('refresh_token') || null,
    isAuthenticated: false,
    token: '',
    chatRoom1: [],
    chatRoom2: [],
    chatRoom3: []
  },
  getters: {
    loggedIn(state) {
      return state.accessToken != null
    }
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem('access_token')) {
        state.token = localStorage.getItem('access_token')
      } else {
        state.token = null
      }
    },
    setToken(state, token) {
      state.token = token
      state.isAuthenticated = true
    },
    removeToken(state) {
      state.token = ''
      state.isAuthenticated = false
    },
    updateLocalStorage(state, { access, refresh }) {
      localStorage.setItem('access_token', access)
      localStorage.setItem('refresh_token', refresh)
      state.accessToken = access
      state.refreshToken = refresh
    },
    updateAccess(state, access) {
      state.accessToken = access
    },
    destroyToken(state) {
      state.accessToken = null
      state.refreshToken = null
    },
    setCurrentUser(state, userInfo) {
      localStorage.setItem('user_email', userInfo.username)
      localStorage.getItem('user_email')
      state.user.email = userInfo.username
    },
    setMessageByRoom(state, messageObject) {
      if (messageObject.room == 1 ) {
        state.chatRoom1.push(messageObject)
      }
      else if (messageObject.room == 2 ) {
        state.chatRoom2.push(messageObject)
      }
      else if (messageObject.room == 3 ) {
        state.chatRoom3.push(messageObject)
      }
    }
  },
    actions: {
      // run the below action to get a new access token on expiration
      refreshToken(context) {
        return new Promise((resolve, reject) => {
          axiosBase.post('/api/token/refresh/', {
            refresh: context.state.refreshToken
          }) // send the stored refresh token to the backend API
            .then(response => { // if API sends back new access and refresh token update the store
              console.log('New access successfully generated')
              context.commit('updateAccess', response.data.access)
              resolve(response.data.access)
            })
            .catch(err => {
              console.log('error in refreshToken Task')
              reject(err) // error generating new access and refresh token because refresh token has expired
            })
        })
      },
      registerUser(context, data) {
        return new Promise((resolve, reject) => {
          axios.post('api/users/register/', {
            name: data.name,
            email: data.email,
            username: data.username,
            password: data.password,
            confirm: data.confirm
          })
            .then(response => {
              resolve(response)
            })
            .catch(error => {
              reject(error)
            })
        })
      },
      logoutUser(context) {
        if (context.getters.loggedIn) {
          localStorage.removeItem('access_token')
          localStorage.removeItem('refresh_token')
          context.commit('destroyToken')
          const emptyUser = {
            username:''
          }
          context.commit('setCurrentUser', emptyUser)
        }
      },
      pushMessage(context, msg_obj){
        context.commit('setMessageByRoom', msg_obj) 
      },

      loginUser(context, credentials) {
        return new Promise((resolve, reject) => {
          // send the username and password to the backend API:
          axios.post('http://localhost:8000/api/users/login/', credentials)
            // if successful update local storage:
            .then(response => {
              context.commit('setCurrentUser', credentials)
              context.commit('updateLocalStorage', { access: response.data.token, refresh: response.data.refresh }) // store the access and refresh token in localstorage
              resolve()
            })
            .catch(err => {
              reject(err)
            })
        })
      }
    },
    modules: {
    }
  })
