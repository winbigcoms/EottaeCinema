import React from 'react';
import styles from './LoadingComponent.module.scss';
export function LoadingComponent({ loading }) {
  return (
    <div
      className={
        loading
          ? [styles.loading, styles.on].join(' ')
          : [styles.loading, styles.off].join(' ')
      }
    >
      <p>
        <span>로딩중</span>
      </p>
    </div>
  );
}
