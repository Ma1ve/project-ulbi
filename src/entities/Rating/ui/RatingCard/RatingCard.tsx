import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RatingCard.module.scss';
import { memo, useCallback, useState } from 'react';
import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { StarRating } from '@/shared/ui/StarRating';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input';
import { Button, ButtonSize, ThemeButton } from '@/shared/ui/Button';
import { BrowserView, MobileView } from 'react-device-detect';
import { Drawer } from '@/shared/ui/Drawer';

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
  rate?: number;
}

export const RatingCard = memo(function RatingCard(props: RatingCardProps) {
  const { className, title, feedbackTitle, hasFeedback, onCancel, onAccept, rate = 0 } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedback] = useState('');

  const onSelectStars = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount);

      // Если есть то hasFeedback открываем модалку в обратном случае сразу отправляем
      if (hasFeedback) {
        setIsModalOpen(true);
      } else {
        onAccept?.(selectedStarsCount);
      }
    },
    [hasFeedback, onAccept],
  );

  const acceptHandle = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [onAccept, feedback, starsCount]);

  const cancelHandle = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const modalContent = (
    <>
      <Text title={feedbackTitle} />
      <Input value={feedback} onChange={setFeedback} placeholder={'Ваш возраст'} />
    </>
  );

  return (
    <>
      <Card className={classNames(cls.RatingCard, {}, [className])}>
        <VStack align={'center'} gap={'8'}>
          <Text title={starsCount ? 'Спасибо за оценку!!!' : title} />
          <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStars} />
        </VStack>
        <BrowserView>
          <Modal isOpen={isModalOpen} lazy>
            {modalContent}
            <VStack max gap={'32'}>
              <HStack max gap={'16'} justify={'end'}>
                <Button theme={ThemeButton.OUTLINE_RED} onClick={cancelHandle}>
                  {'Закрыть'}
                </Button>
                <Button theme={ThemeButton.OUTLINE} onClick={acceptHandle}>
                  {'Отправить'}
                </Button>
              </HStack>
            </VStack>
          </Modal>
        </BrowserView>
        <MobileView>
          <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
            <VStack gap={'32'}>
              {modalContent}
              <Button fullWidth theme={ThemeButton.OUTLINE} onClick={acceptHandle} size={ButtonSize.L}>
                {'Отправить'}
              </Button>
            </VStack>
          </Drawer>
        </MobileView>
      </Card>
    </>
  );
});
