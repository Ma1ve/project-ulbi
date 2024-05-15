import { profileReducer } from '@/entities/Profile';
import { ProilePageHeader } from '@/pages/ProfilePageHeader/ui/ProfilePageHeader';

import { Page } from '@/widgets/Page/Page';

import { VStack } from '@/shared/ui/Stack';
import { EditableProfileCard } from '@/features/editableProfileCard/ui/EditableProfileCard/EditableProfileCard';
import { ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useParams } from 'react-router-dom';
import { Text } from '@/shared/ui/Text';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
  const { className } = props;

  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Text text={'Профиль не найден'} />;
  }

  return (
    <Page data-testid="ProfilePage">
      <VStack gap="16">
        {/* Тут должен быть как  <EditableProfileCardHeader /> */}
        {/* <ProilePageHeader /> */}

        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  );
};

export default ProfilePage;
