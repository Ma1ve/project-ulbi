import React, { InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';
import cls from './Input.module.scss';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readonly?: boolean;
}

export const Input = memo(function Input(props: InputProps) {
  const { className, value, onChange, type = 'text', placeholder, autofocus, readonly, ...otherProps } = props;

  const ref = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [carretPosition, setCarretPosition] = useState(0);

  const onChangehandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCarretPosition(e.target.value.length);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onSelect = (e: any) => {
    setCarretPosition(e?.target?.selectionStart || 0);
  };

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  const mods: Mods = {
    [cls.readonly]: readonly,
  };

  const isCaretVisible = isFocused && !readonly;

  return (
    <div className={classNames(cls.InputWrapper, mods, [className])}>
      {placeholder && <div className={cls.placeholder}>{`${placeholder}>`}</div>}
      <div className={cls.caretWrapper}>
        <input readOnly={readonly} ref={ref} type={type} value={value} onChange={onChangehandler} {...otherProps} className={cls.input} onBlur={onBlur} onFocus={onFocus} onSelect={onSelect} />
        {isCaretVisible && <span style={{ left: `${carretPosition * 9}px` }} className={cls.caret}></span>}
      </div>
    </div>
  );
});
