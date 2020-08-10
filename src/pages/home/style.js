import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow: hindden;
  width: 960px;
  margin:0 auto;
  height: 300px;
  position: relative;
`;

export const HomeLeft = styled.div`
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  float: left;

  .banner-img{
    height: 270px;
    width: 625px;
  }
`;

export const HomeRight = styled.div`
  width: 240px;
  float: right;
`;

// Topic样式

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;

  .moreTopics{
    float: left;
    font-size: 12px;
    padding: 12px 0 0 20px;
  }
`

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  color: #000;
  background: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 18px;

  img{
    display: block;
    float: left;
    height: 32px;
    width: 32px;
    margin-right: 10px;
  }
`;

// List
export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;

  img{
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`;

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title{
    font-size: 18px;
    line-height: 27px;
    font-weight: bold;
    color: #000;
  }

  .desc{
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`


// 推荐
export const RecommendWrapper = styled.div`
  padding: 30px 0;
`

export const RecommendItem = styled.div`

  img{
    width: 280px;
    height: 50px;
    margin-bottom: 6px;
  }

`;


// 回到顶部
export const BackTop = styled.div`
  position: fixed;
  width: 50px;
  height: 50px;
  right: 40px;
  font-size: 12px;
  bottom: 40px;
  box-sizing: border-box;
  text-align: center;
  border: 1px solid #cdcdcd;
  cursor: pointer;
`