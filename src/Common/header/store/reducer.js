import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  mouseIn: false,
  focused: false,
  list: [],
  page: 1,
  totalPage: 1,

});

// 纯函数：固定输入固定输出
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      // immutable对象set方法，阶和之祈安immutable对象的值
      // 和设置的值返回全新对象
      return state.set('focused', true);
    case actionTypes.SEARCH_BLUR:
      return state.set('focused', false);
    case actionTypes.CHANGE_LIST:
      return state.merge({
        'list': action.data,
        'totalPage': action.totalPage
      })
    case actionTypes.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case actionTypes.MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case actionTypes.SWITCH_LIST:
      return state.set('page', action.page);
  }

  return state;
}