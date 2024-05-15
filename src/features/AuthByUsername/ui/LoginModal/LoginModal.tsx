import cls from './LoginModal.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import LoginForm from '../LoginForm/LoginForm';
import { Modal } from '@/shared/ui/Modal';
import { Loader } from '@/shared/ui/Loader';
import { Suspense } from 'react';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
  const { className, isOpen, onClose } = props;

  return (
    <Modal lazy className={classNames(cls.LoginModal, {}, [className])} isOpen={isOpen} onClose={onClose}>
      <Suspense fallback={<Loader />}>
        {/* <LoginForm /> */}
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
};
