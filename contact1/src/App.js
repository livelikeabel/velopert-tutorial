import React, { Component } from 'react';
import Header from './components/Header';
import Container from './components/Container';
import ViewSelector from './components/ViewSelector';
import FloatingButton from './components/FloatingButton';
import ContactModal from './components/ContactModal';
import Dimmed from './components/Dimmed';
import oc from 'open-color';

function generateRandomColor() {
    const colors = [
      'gray',
      'red',
      'pink',
      'grape',
      'violet',
      'indigo',
      'blue',
      'cyan',
      'teal',
      'green',
      'lime',
      'yellow',
      'orange'
    ];

    const random = Math.floor(Math.random() * 13);

    return oc[colors[random][6]];
}

class App extends Component {

  state = {
    view: 'favorite',
    modal: {
      visible: false,
      mode: null // create 혹은 modify
    }
  }

  handleSelectView = (view) => this.setState({view})

  modalHandler = {
    show: (mode, payload) => {
        this.setState({
          modal: {
            mode,
            visible: true,
            ...payload // payload 안의 깂을 풀어서 여기에 넣음
          }
        })
    },
    hide: () => {
        this.setState({
          modal: {
              ...this.state.modal, // 기존 값들을 복사해서 안에 넣음
              visible: false
          }
        })
    },

    change: null,
    action: {
        create: null,
        modify: null,
        remove: null
    }
  }

  handleFloatingButtonClick = () => {
    const { view } = this.state;
    if(view !== 'list')
        this.setState({view: 'list'});

    this.modalHandler.show(
        'create',
        {
            name: '',
            phone: '',
            color: generateRandomColor()
        }
    );
  }

  render() {

    const { 
      handleSelectView,
      handleFloatingButtonClick,
      modalHandler
     } = this;

    const { 
      view,
      modal
     } = this.state;

    return (
      <div>
          <Header/>
          <ViewSelector onSelect={handleSelectView} selected={view}/>

          <Container visible={view==='favorite'}>즐겨찾기</Container>
          <Container visible={view==='favorite'}>리스트</Container>

          <ContactModal {...modal} onHide={modalHandler.hide}/>
          <Dimmed visible={modal.visible}/>
          <FloatingButton onClick={handleFloatingButtonClick}/>
      </div>
    );
  }
}

export default App;