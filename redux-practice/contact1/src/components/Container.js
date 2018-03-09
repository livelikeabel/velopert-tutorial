import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { media } from '../lib/style-utils';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    width: 700px;
    margin: 0 auto;
    padding: 1rem;

    ${media.mobile`
        width: 100%;
    `}
`;

// visible이 false 면 null 반환
const Container = ({visible, children}) => visible ? (
    <Wrapper>
        {children}
    </Wrapper>
) : null;

// PropTypes 설정
Container.PropTypes = {
    visible: PropTypes.bool
};

export default Container;
