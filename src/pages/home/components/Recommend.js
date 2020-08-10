import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RecommendItem, RecommendWrapper } from '../style';

class Recommend extends PureComponent {

  render() {

    const { recommendList } = this.props;

    return (
      <RecommendWrapper>
        {
          recommendList.map((item, index) => {
            return (
              <RecommendItem key={item.get('id')}>
                <img src={item.get('imgUrl')} />
              </RecommendItem>
            );
          })
        }
      </RecommendWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recommendList: state.getIn(['home', 'recommendList'])
  }
};

export default connect(mapStateToProps, null)(Recommend);