import { Button, Divider } from 'antd';
import React, { useCallback } from 'react';

import Avatar from 'components/UserAvatar';
import { useStore } from 'contexts/Store';
import useModalNameChange from 'hooks/useModal/UserSettings/useModalNameChange';
import useModalPasswordChange from 'hooks/useModal/UserSettings/useModalPasswordChange';

import css from './SettingsAccount.module.scss';

const SettingsAccount: React.FC = () => {
  const { auth } = useStore();
  const {
    contextHolder: modalNameChangeContextHolder,
    modalOpen: openChangeDisplayNameModal,
  } = useModalNameChange();
  const {
    contextHolder: modalPasswordChangeContextHolder,
    modalOpen: openChangePasswordModal,
  } = useModalPasswordChange();

  const handlePasswordClick = useCallback(() => {
    openChangePasswordModal();
  }, [ openChangePasswordModal ]);

  const handleDisplayNameClick = useCallback(() => {
    openChangeDisplayNameModal();
  }, [ openChangeDisplayNameModal ]);

  return (
    <div className={css.base}>
      <div className={css.field}>
        <span className={css.header}>Avatar</span>
        <span className={css.body}>
          <Avatar hideTooltip large userId={auth.user?.id} />
        </span>
        <Divider />
      </div>
      <div className={css.field}>
        <span className={css.header}>Display name</span>
        <span className={css.body}>
          <span>{auth.user?.displayName}</span>
          <Button onClick={handleDisplayNameClick}>
            Change name
          </Button>
        </span>
        <Divider />
      </div>
      <div className={css.field}>
        <span className={css.header}>Username</span>
        <span className={css.body}>{auth.user?.username}</span>
        <Divider />
      </div>
      <div className={css.field}>
        <span className={css.header}>Password</span>
        <span className={css.body}>
          <Button onClick={handlePasswordClick}>
            Change password
          </Button>
        </span>
      </div>
      {modalNameChangeContextHolder}
      {modalPasswordChangeContextHolder}
    </div>
  );
};

export default SettingsAccount;