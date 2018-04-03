import React, { Component } from 'react';
import Header from './components/Header';
import Container from './components/Container';
import ViewSelector from './components/ViewSelector';
import FloatingButton from './components/FloatingButton';
import ContactModal from './components/ContactModal';
import Dimmed from './components/Dimmed';
import ContactList from './components/ContactList';

import shortid from 'shortid';
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
    view: 'list',
    modal: {
      visible: false,
      mode: null // create 혹은 modify
    },
    contacts: [
      {
        "id": "SyKw5cyAl",
        "name": "김민준",
        "phone": "010-0000-0000",
        "color": "#40c057",
        "favorite": true
      },
      {
        "id": "r1s_9c10l",
        "name": "아벳",
        "phone": "010-0000-0001",
        "color": "#12b886",
        "favorite": true
      },
      {
        "id": "BJcFqc10l",
        "name": "베티",
        "phone": "010-0000-0002",
        "color": "#fd7e14",
        "favorite": false
      },
      {
        "id": "BJUcqqk0l",
        "name": "찰리",
        "phone": "010-0000-0003",
        "color": "#15aabf",
        "favorite": false
      },
      {
        "id": "rJHoq91Cl",
        "name": "데이비드",
        "phone": "010-0000-0004",
        "color": "#e64980",
        "favorite": false
      }
    ]
  }

  handleSelectView = (view) => this.setState({ view })

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
    change: ({ name, value }) => {
      this.setState({
        modal: {
          ...this.state.modal,
          [name]: value
        }
      })
    },
    action: {
      create: () => {
        // 고유 ID 생성
        const id = shortid.generate();

        // 레퍼런스 생성
        const { contacts, modal: { name, phone, color } } = this.state;

        // 데이터 생성
        const contact = {
          id,
          name,
          phone,
          color,
          favorite: false // 즐겨찾기의 기본값은 false
        };

        this.setState({
          // 기존 배열에있던것들을 집어넣고, contact 를 뒤에 추가한 새 배열로 설정
          contacts: [...contacts, contact]
        });

        // 모달 닫기
        this.modalHandler.hide();
      },
      modify: null,
      remove: null
    }
  }

  handleFloatingButtonClick = () => {
    const { view } = this.state;
    if (view !== 'list')
      this.setState({ view: 'list' });

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
      modal,
      contacts
    } = this.state;

    return (
      <div>
        <Header />
        <ViewSelector onSelect={handleSelectView} selected={view} />

        <Container visible={view === 'favorite'}>즐겨찾기</Container>
        <Container visible={view === 'list'}>
            <ContactList contacts={contacts}/>
        </Container>

        <ContactModal
          {...modal}
          onHide={modalHandler.hide}
          onChange={modalHandler.change}
          onAction={modalHandler.action[modal.mode]}
        />
        <Dimmed visible={modal.visible} />
        <FloatingButton onClick={handleFloatingButtonClick} />
      </div>
    );
  }
}

export default App;