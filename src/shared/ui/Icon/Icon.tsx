import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps extends React.SVGProps<React.SVGAttributes<SVGElement>> {
  className?: string;
  Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  width: number;
  height: number;
  inverted?: boolean;
}

export const Icon = (props: IconProps) => {
  const { className, Svg, width, height, inverted, ...otherProps } = props;

  return <Svg className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])} width={width} height={height} {...otherProps} />;
};
