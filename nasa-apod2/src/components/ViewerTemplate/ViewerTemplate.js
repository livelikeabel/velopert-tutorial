import React from 'react';
import styles from './ViewerTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ViewerTemplate = ({ viewer, spaceNavigator }) => {
  return (
    <div className={cx('viewer-template')}>
      <header>
        Astronomy Picture of the Day
      </header>
      <div className={cx('viewer-wrapper')}>
        {viewer}
        viewer
        <div className={cx('space-navigator-wrapper')}>
          {spaceNavigator}
          spaceNavigator
        </div>
      </div>
    </div>
  );
};

export default ViewerTemplate;
