import React from 'react';
import { useCallback } from 'react';
import styles from './NoTokenModal.module.scss';

export default function NoTokenModal({ setTokenState, login }) {
  const dimmerClick = useCallback(
    (e) => {
      if (e.target.matches('#no-token-modal-inner')) return;

      setTokenState('none');
    },
    [setTokenState],
  );

  const okClick = () => {
    setTokenState('none');
    login();
  };

  const closeClick = () => {
    setTokenState('none');
  };

  return (
    <div className={styles['no-token-modal-wrapper']} onClick={dimmerClick}>
      <div
        className={styles['no-token-modal-inner']}
        id={'no-token-modal-inner'}
      >
        <div className={styles['message-box']}>
          <p className={styles.message}>
            로그인을 하신 후 이용해 주시기 바랍니다.
          </p>
        </div>
        <div className={styles['no-token-button-box']}>
          <button className={styles.ok} onClick={okClick}>
            확인
          </button>
          <button className={styles.close} onClick={closeClick}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
}
