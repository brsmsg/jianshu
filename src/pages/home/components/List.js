import React, { PureComponent } from 'react';
import {
  ListItem,
  ListInfo,
  LoadMore
} from '../style'
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

class List extends PureComponent {

  render() {

    const { articleList, getMoreList, page } = this.props;

    return (
      <div>
        {
          articleList.map((item, index) => {
            return (
              <Link to={'/detail/' + item.get('id')} key={item.get('id')}>
                <ListItem>
                  <ListInfo>
                    <h3 className='title'>{item.get('title')}</h3>
                    <p className='desc'>{item.get('desc')}</p>
                  </ListInfo>
                  <img
                    className='img'
                    src={item.get('imgUrl')}
                  />
                </ListItem>
              </Link>
            );
          })
        }
        <LoadMore
          onClick={() => getMoreList(page)}
        >
          更多
          </LoadMore>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    articleList: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
  }
}

const mapDisatch = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page));
  }
})

export default connect(mapStateToProps, mapDisatch)(List);