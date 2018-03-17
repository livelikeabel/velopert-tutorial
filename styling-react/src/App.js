import React, { Component } from 'react';
import Button from './components/Button';
import StyledButton from './components/StyledButton';

class App extends Component {
  render(){
    return(
      <div>
         <Button>버튼</Button>
         <StyledButton big>스타일 버튼</StyledButton>
      </div>
    )
  }
}

export default App;
