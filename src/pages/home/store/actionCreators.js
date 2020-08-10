import axios from 'axios';
import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable'

const changeHomeData = (result) => ({
  type: actionTypes.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const action = changeHomeData(res.data.data);
      dispatch(action)
    }).catch(

    )
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('api/homeList.json?page=' + page).then((res) => {
      const result = res.data.data;
      const action = {
        type: actionTypes.GET_MORE_ARTICLES,
        articleList: fromJS(result),
        page
      }
      dispatch(action);
    })
  }
}

export const toggleTopShow = (flag) => ({
    type: actionTypes.TOGGLE_SCROLL_SHOW,
    show: flag
})