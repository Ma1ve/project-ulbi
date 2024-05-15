import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import { memo, useState } from 'react';
import { Icon } from '../Icon/Icon';
import StarIcon from '@/shared/assets/icons/star.svg';

interface StarRatingProps {
  className?: string;
  onSelect: (starsCount: number) => void;
  size?: number;
  selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo(function StarRating(props: StarRatingProps) {
  const { className, size = 30, selectedStars = 0, onSelect } = props;

  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));
  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars ?? 0);

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount);
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  };

  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount);
      setCurrentStarsCount(starsCount);
      setIsSelected(true);
    }
  };

  return (
    <>
      <div className={classNames(cls.StarRating, {}, [className])}>
        {stars.map((starNumber) => (
          <Icon
            className={classNames(cls.startIcon, { [cls.selected]: isSelected }, [currentStarsCount >= starNumber ? cls.hovered : cls.normal])}
            Svg={StarIcon}
            width={size}
            height={size}
            key={starNumber}
            onMouseLeave={onLeave}
            onMouseEnter={onHover(starNumber)}
            onClick={onClick(starNumber)}
          />
        ))}
      </div>
    </>
  );
});
