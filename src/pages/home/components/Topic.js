import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import {
  TopicWrapper,
  TopicItem,
} from '../style'
import { getIn } from 'immutable';

class Topic extends PureComponent {



  render() {

    const { topicList } = this.props;

    return (
      <TopicWrapper>
        {
          topicList.map((item, index) => {
            return (
              <TopicItem key={item.get('id')}>
                <img
                  className='topic-pic'
                  src={item.get('imgUrl')}
                />
                {item.get('title')}
              </TopicItem>
            );
          })
        }
        <span className='moreTopics'>更多热门专题</span>
      </TopicWrapper>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    topicList: state.getIn(['home', 'topicList'])
  }
}

const mapDispatchToProps = () => {

}

export default connect(mapStateToProps, null)(Topic);