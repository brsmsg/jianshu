import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id=' + id).then((res) => {
      const result = res.data.data;
      const action = {
        type: actionTypes.GET_DETAIL,
        title: result.title,
        content: result.content
      }
      dispatch(action);
    })
  }
  
}

