import React, { Component } from 'react';
import Header from './components/Header';
import Container from './components/Container';
import ViewSelector from './components/ViewSelector';
import FloatingButton from './components/FloatingButton';
import oc from 'open-color';
import ContactModal from './components/ContactModal';
import Dimmed from './components/Dimmed';
import shortid from 'shortid';

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

    // 0 부터 12 까지 랜덤 숫자
    const random = Math.floor(Math.random()*13);

    return oc[colors[random]][6];
}

class App extends Component {
    /* === #1 --- */
    state = {
        view: 'favorite',
        modal: {
            visible: false,
            mode: null // create 혹은 modify
        },
        contacts: []
    }

    handleSelectView = (view) => this.setState({view})

    // 모달 관련 메소드들
    modalHandler = {
        show: (mode, payload) => {
            this.setState({
                modal: {
                    mode,
                    visible: true,
                    ...payload // payload 안의 값을 풀어서 여기에 넣음
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
        change: ({name, value}) => {
            this.setState({
                modal: {
                    ...this.state.modal,
                    [name]: value // 인자로 전달받은 name의 값을 value로 설정
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

                // 모달 달기
                this.modalHandler.hide();
            },
            modify: null,
            remove: null
        }
    }

    //FloatingButton 클릭
    handleFloatingButtonClick = () => {
        // 현재 view가 list가 아니면 list로 설정
        const { view } = this.state;
        if(view !== 'list')
            this.setState({view: 'list'});

        // Contact 추가 모달 띄우기
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
        // 레퍼런스 준비
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
                <Header />
                <ViewSelector onSelect={handleSelectView} selected={view}/>

                {/* view 값에 따라 다른 컨테이너를 보여준다. */}
                <Container visible={view==='favorite'}>즐겨찾기</Container>
                <Container visible={view==='list'}>리스트</Container>

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
