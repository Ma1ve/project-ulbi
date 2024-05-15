import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import cls from './ListBox.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '../../../Button/Button';
import { HStack } from '../../../Stack';
import { DropdownDirection } from '@/shared/types/ui';
import { mapDirectonClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps {
  items?: ListBoxItem[];
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange?: <T extends string>(value: T) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
}

export function ListBox(props: ListBoxProps) {
  const { items, className, value, defaultValue, onChange, readonly, direction = 'bottom right', label } = props;

  const optionClasses = [cls.options, mapDirectonClass[direction]];
  return (
    <HStack gap={'4'}>
      {label && <span>{label + '>'}</span>}
      <HListBox disabled={readonly} as="div" className={classNames(cls.ListBox, {}, [className, popupCls.popup])} value={value} onChange={onChange}>
        <HListBox.Button as="div" aria-disabled={readonly} className={popupCls.trigger}>
          <Button disabled={readonly}>{value ?? defaultValue}</Button>
        </HListBox.Button>
        <HListBox.Options className={classNames('', {}, optionClasses)}>
          {items?.map((item) => (
            <HListBox.Option key={item.value} value={item.value} disabled={item.disabled} as={Fragment}>
              {({ active, selected }) => (
                <li className={classNames(cls.item, { [popupCls.active]: active, [popupCls.disabled]: active }, [])}>
                  {selected && '!!!'}
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
}
