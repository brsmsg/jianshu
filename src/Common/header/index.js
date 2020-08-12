import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store'
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem
} from './style'
import { Link } from 'react-router-dom';

class Header extends Component {

  getListArea(show, list) {
    const {
      handleSwitchClick,
      page,
      handleMouseEnter,
      handleMouseLeave,
      mouseIn,
      totalPage } = this.props;

    const pageList = []
    for (let i = (page - 1) * 2; i < page * 2; i++) {
      // pageList.push(list.get(i));
      if (list.get(i)) {
        pageList.push(list.get(i));
      }
    }

    if (show || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => { handleSwitchClick(page, totalPage, this.spinIcon) }}
            >
              <i ref={(icon) => { this.spinIcon = icon; }} className='iconfont spin'>&#xe851;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              pageList.map((item, index) => {
                return (<SearchInfoItem key={item}>{item}</SearchInfoItem>);
              })
            }

          </SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }

  render() {

    const { focused, list, handleInputBlur, handleInputFocus, login, logout } = this.props;

    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo />
        </Link>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载APP</NavItem>
          <NavItem className='right'><span className="iconfont">&#xe636;</span></NavItem>
          {
            login ?
              <NavItem className='right' onClick={logout}>退出</NavItem> :
              <Link to="/login">
                <NavItem className='right'>登录</NavItem>
              </Link>
          }<SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                onFocus={() => { handleInputFocus(list) }}
                onBlur={handleInputBlur}
                className={focused ? 'focused' : ''}
              /></CSSTransition>
            <span className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe6cf;</span>
            {this.getListArea(focused, list)}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to='/write'>
            <Button className='writting'><span className="iconfont">&#xe608; </span> 写文章</Button>
          </Link>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    //仓库中的focused映射到this.props中
    // header已经是immutable
    // focused: state.get('header').get('focused')
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    login: state.getIn(['login', 'login'])
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    handleInputFocus(list) {
      if (list.size === 0) {
        dispatch(actionCreators.getList());
      }
      dispatch(actionCreators.searchFocus());
    },

    handleInputBlur() {
      const action = actionCreators.searchBlur();
      dispatch(action);
    },

    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },

    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },

    handleSwitchClick(page, totalPage, spinDom) {
      let originAngle = spinDom.style.transform.replace(/[^0-9]/ig, '');
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }

      spinDom.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
      if (page + 1 > totalPage) {
        page = 1;
      } else {
        page += 1;
      }
      dispatch(actionCreators.switchList(page));
    },

    logout() {
      dispatch(loginActionCreators.logout());
    }
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(Header);