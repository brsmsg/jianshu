import styled from 'styled-components';
import logoPic from '../../statics/logo.png'

// 创建组件HeadWrapper => div标签
export const HeaderWrapper = styled.div`
  height: 58px;
  border-bottom: solid #f0f0f0;
  position: relative;
`

export const Logo = styled.div`
  height: 56px;
  width: 100px;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  background: url(${logoPic});
  background-size: contain;
`

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  padding-right: 70px;
  box-sizing: border-box;
`

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left{
    float: left;
  }
  &.right{
    float: right;
    color: #969696
  }
  &.active{
    color: #ea6f5a;
  }
`;

export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  .iconfont{

    &.zoom{
      position: absolute;
      right: 5px;
      bottom: 5px;
      width: 30px;
      line-height: 30px;
      border-radius: 50%;
      text-align: center;
    }
    /* background-color: green; */

    &.focused{
      background: #777;
      color: #fff;
    }
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索',
})`

  width: 160px;
  height: 38px;
  border: none;
  box-sizing: border-box;
  outline: none;
  border-radius: 19px;
  background-color: #eee;
  padding: 0 35px 0 20px;
  margin: 9px 0 0 20px ;
  font-size: 14px;
  
  /* 入场 */
  &.slide-enter{
    transition: all .2s ease-out;
  }

  &.slide-enter-active{
    width: 240px;
  }

  &.slide-exit{
    transition: all .2s ease-out;
  }

  &.slide-exit-active{
    width: 160px
  }

  /* transition: width 1s; */
  &.focused {
    width: 240px;
  }
`;


export const SearchInfo = styled.div`
  position: absolute;
  left:20px;
  top: 58px;
  width: 200px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  background: #fff;
  z-index: 9999
`;


export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 12px;
  cursor: pointer;

  .spin{
    display: inline-block;
    font-size: 12px;
    margin-right: 2px;
    transition: all .5s ease-in;
    transform-origin: center center;
  }
`

export const SearchInfoList = styled.div`
  overflow: hidden;
`

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  line-height: 20px;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #333;
  border-radius: 2px;
`;


export const Addition = styled.div`
  position: absolute;
  right: 0;
  top:0;

`;

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px; 
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  
  &.reg{
    color: #ec6149
  }
  &.writting{
    color: #fff;
    background-color: #ec6149;
  }
`
