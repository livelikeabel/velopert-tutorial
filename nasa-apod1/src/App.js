import React, { Component } from 'react';
import ViewerTemplate from './components/ViewerTemplate';
import SpaceNavigator from './components/SpaceNavigator';
import Viewer from './components/Viewer';
import moment from 'moment';
import * as api from './lib/api';

class App extends Component {
  state = {
    loading: false,
    maxDate: null,
    date: null,
    url: null,
    mediaType: null
  }

  getAPOD = async (date) => {
    if (this.state.loading) return; // 이미 요청중이라면 무시

    //로딩 상태 시작
    this.setState({
      loading: true
    });

    try {
      const response = await api.getAPOD(date);
      console.log(response);
      //비구조화 할당 + 새로운 이름   //response.data 안에 있는 media_type 이란 값을 mediaType 이라고 부르겠다 라는 의미와 동일합니다.
      const { date: retrievedDate, url, media_type: mediaType } = response.data;

      if(!this.state.maxDate) {
        //만약에 maxDate가 없으면 지금 받은 data로 지정
        this.setState({
          maxDate: retrievedDate
        })
      }

      //전달받은 데이터 넣어주기
      this.setState({
        date: retrievedDate,
        mediaType,
        url
      });
    } catch (e) {
      // 오류가 났을 경우
      console.log(e);
    }

    //로딩 상태 종료
    this.setState({
      loading: false
    });
  } //getAPOD

  handlePrev = () => {
    const { date } = this.state;
    const prevDate = moment(date).subtract(1, 'days').format('YYYY-MM-DD');
    console.log(prevDate);
    this.getAPOD(prevDate);
  }

  handleNext = () => {
    const { date, maxDate } = this.state;
    if(date === maxDate) return;

    const nextDate = moment(date).add(1, 'days').format('YYYY-MM-DD');
    this.getAPOD(nextDate);
  }

  componentDidMount() {
    this.getAPOD();
  }


  render() {
    const{ url, mediaType, loading } = this.state;
    const { handlePrev, handleNext } = this;

    return (
      <ViewerTemplate
        spaceNavigator={<SpaceNavigator onPrev={handlePrev} onNext={handleNext}/>}
        viewer={(
          <Viewer
            url={url}
            mediaType={mediaType}
            loading={loading}/> //props가 {}이게 아닌 "" 이걸로도 가능허네. //props로 컴포넌트를 넘기네
        )}
      />
    );
  }
}

export default App;
