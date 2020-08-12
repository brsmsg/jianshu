import axios from 'axios';
import { actionTypes } from '.';

export const login = (account, password) => {
  return (dispatch) => {
    axios.get('/api/login.json?account=' + account + '&password=' + password)
      .then((res) => {
        const result = res.data.data;
        if (result) {
          const action = {
            type: actionTypes.LOGIN,
            value: true
          }
          dispatch(action)
        } else {
          alert('登陆失败')
        }
      })
  }
};

export const logout = () => ({
  type: actionTypes.LOGOUT,
  value: false
});