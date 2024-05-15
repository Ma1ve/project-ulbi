import { Menu } from '@headlessui/react';
import cls from './Dropdown.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Fragment, ReactNode } from 'react';
import { DropdownDirection } from '@/shared/types/ui';
import { AppLink } from '../../../AppLink/AppLink';
import { mapDirectonClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

interface DropdownItem {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
}

interface DropDownProps {
  className?: string;
  items?: DropdownItem[];
  trigger: ReactNode;
  direction?: DropdownDirection;
}

export function Dropdown(props: DropDownProps) {
  const { className, items, trigger, direction = 'bottom right' } = props;

  const menuClasses = [mapDirectonClass[direction]];

  return (
    <Menu as="div" className={classNames(cls.Dropdown, {}, [className, popupCls.popup])}>
      <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
        {items?.map((item, idx) => {
          const content = ({ active }: { active: boolean }) => (
            <button disabled={item.disabled} onClick={item.onClick} className={classNames(cls.item, { [popupCls.active]: active })}>
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item key={idx} as={AppLink} to={item.href} disabled={item.disabled}>
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item key={idx} as={Fragment} disabled={item.disabled}>
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}
