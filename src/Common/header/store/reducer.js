import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused: false
});

// 纯函数：固定输入固定输出
export default (state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOCUS) {
    // immutable对象set方法，阶和之祈安immutable对象的值
    // 和设置的值返回全新对象
    return state.set('focused', true);

  }
  if (action.type === actionTypes.SEARCH_BLUR) {
    return state.set('focused', false);
  }

  return state;
}