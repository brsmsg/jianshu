import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo
} from './style'

const Header = (props) => {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载APP</NavItem>
        <NavItem className='right'><span className="iconfont">&#xe636;</span></NavItem>
        <NavItem className='right'>登录</NavItem>
        <SearchWrapper>
          <CSSTransition
            in={props.focused}
            timeout={200}
            classNames="slide"
          >
            <NavSearch
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
              className={props.focused ? 'focused' : ''}
            /></CSSTransition>
          <span className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe6cf;</span>
        </SearchWrapper>
        <SearchInfo>

        </SearchInfo>
      </Nav>
      <Addition>
        <Button className='writting'><span className="iconfont">&#xe608; </span> 写文章</Button>
        <Button className='reg'>注册</Button>
      </Addition>
    </HeaderWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    //仓库中的focused映射到props中
    // header已经是immutable
    // focused: state.get('header').get('focused')
    focused: state.getIn(['header', 'focused'])
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    handleInputFocus() {
      const action = actionCreators.searchFocus();
      dispatch(action)
    },

    handleInputBlur() {
      const action = actionCreators.searchBlur();
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(Header);