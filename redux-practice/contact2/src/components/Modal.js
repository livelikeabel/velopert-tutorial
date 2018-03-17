import React, { Component } from 'react';
import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';
import {media} from '../lib/style-utils';
import PropTypes from 'prop-types';

// 모달 위치 및 사이즈 설정
const Wrapper = styled.div`
`;

Wrapper.propTypes = {
    width: PropTypes.string
};

const ModalBox = styled.div``;

class Modal extends Component {
    static propTypes = {
        visible: PropTypes.bool,
        onHide: PropTypes.func,
        width: PropTypes.string
    }

    static defaultProps = {
        width: '400px'
    }

    //컴포넌트 외부를 클릭하면 실행되는 메소드
    handleClickOutside = (e) => {
        const { visible, onHide } = this.props;

        if(!visible) return null; // 이미 visible이 false라면 아무것도 안함
        onHide();
    }

    //esc 키가 클릭되면 onHide를 실행한다.
    handleKeyUp = (e) => {
        const { onHide } = this.props
        if (e.keyCode === 27) {
            onHide();
        }
    }

    componentDidUpdate(prevProps, prevState) {
      
    }
}
