import React, { Component } from 'react';
import ViewerTemplate from './components/ViewerTemplate';
import SpaceNavigator from './components/SpaceNavigator';
import Viewer from './components/Viewer';

class App extends Component {
  render() {
    return (
      <ViewerTemplate
        spaceNavigator={<SpaceNavigator/>}
        viewer={(
          <Viewer
          url="https://www.youtube.com/embed/uj3Lq7Gu94Y?rel=0"
          mediaType="video"/> //props가 {}이게 아닌 "" 이걸로도 가능허네. //props로 컴포넌트를 넘기네
        )}
      />
    );
  }
}

export default App;
