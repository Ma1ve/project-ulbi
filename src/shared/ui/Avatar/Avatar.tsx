import { CSSProperties, useMemo } from 'react';
import cls from './Avatar.module.scss';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { AppImage } from '../AppImage';
import UserIcon from '../../assets/icons/profile.svg';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

interface AvatarProps {
  className?: string;
  size?: number;
  src?: string;
  alt?: string;
}

export const Avatar = (props: AvatarProps) => {
  const { className, size = 100, src, alt } = props;

  const mods: Mods = {};

  const styles = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
    }),
    [size],
  );

  const fallback = <Skeleton width={size} height={size} border={'50%'} />;
  const errorFallback = <Icon Svg={UserIcon} width={size} height={size} />;

  return (
    <>
      <AppImage fallback={fallback} errorFallback={errorFallback} src={src} style={styles} alt={alt} className={classNames(cls.Avatar, mods, [className])} />
    </>
  );
};
