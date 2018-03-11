import React, { Component } from 'react';
import Header from './components/Header';
import Container from './components/Container';
import ViewSelector from './components/ViewSelector';
import FloatingButton from './components/FloatingButton';

class App extends Component {
    /* === #1 --- */
    state = {
        view: 'favorite'
    }

    handleSelectView = (view) => this.setState({view})

    render() {
        // 레퍼런스 준비
        const { handleSelectView } = this;
        const { view } = this.state;

        return (
            <div>
                <Header />
                <ViewSelector onSelect={handleSelectView} selected={view}/>

                {/* view 값에 따라 다른 컨테이너를 보여준다. */}
                <Container visible={view==='favorite'}>즐겨찾기</Container>
                <Container visible={view==='list'}>리스트</Container>

                <FloatingButton />
            </div>
        );
    }
}

export default App;
