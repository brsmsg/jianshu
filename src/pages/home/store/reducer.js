import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return state.merge({
        'topicList': fromJS(action.topicList),
        'articleList': fromJS(action.articleList),
        'recommendList': fromJS(action.recommendList)
      });
    case actionTypes.GET_MORE_ARTICLES:
      return state.set('articleList', state.get('articleList').concat(action.articleList))
        .set('articlePage', action.page + 1);
    case actionTypes.TOGGLE_SCROLL_SHOW:
      return state.set('showScroll', action.show);
  }
  return state;
}