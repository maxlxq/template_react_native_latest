import { combineReducers } from 'redux';
import { INITIAL_STATE, home } from './home';
import { login } from './login';
import { device } from './device';

const appReducer = combineReducers<Record<string, any> | unknown>({
  home,
  login,
  device,
});

const reducer = (state: any, action: any) => {
  console.log('reducer action.type:', state, action.type);
  let newState = state;
  if (action.type === 'LOGOUT_REQUEST') {
    // 退出登录时，同步初始化部分必要数据
    newState = {
      ...(state || {}),
      home: INITIAL_STATE,
    };
  }
  return appReducer(newState, action);
};

export default reducer;
