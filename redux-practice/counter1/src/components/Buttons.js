import React from 'react';
import PropTypes from 'prop-types';

import './Buttons.css';

const Buttons = ({onCreate, onRemove}) => {
    return (
        <div className="Buttons">
            <div className="btn add" onClick={onCreate}>
                create
            </div>
            <div className="btn remove" onClick={onRemove}>
                remove
            </div>
        </div>
    );
};

Buttons.propTypes = {
    onCreate: PropTypes.func,
    onRemove: PropTypes.func
};

Buttons.defaultProps = {
    onCreate: () => console.warn('onCreate not defined'),
    onRemove: () => console.warn('onRemove not defined')
};

export default Buttons;
