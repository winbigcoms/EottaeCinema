import React from 'react';
import styles from './FirstLoading.module.scss';
export default function FirstLoadingComponent({ loading }) {
  return (
    loading && (
      <div className={styles.loadingModal}>
        <div className={styles.textWrapper}>
          <p>최초 로딩은 시간이 걸려요!</p>
        </div>
      </div>
    )
  );
}
