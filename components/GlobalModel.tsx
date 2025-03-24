import { View, Text } from 'react-native';
import Modal from 'react-native-modal';
import useModel from '~/store/model';
import { Button } from './Button';

export default function GlobalModel() {
  const { isOpen, content, toggelOpen } = useModel();
  return (
    <View>
      <Modal isVisible={isOpen}>
        <View className="flex min-h-screen items-center justify-center">
          <View className="bg-blue-400 p-2">{content}</View>
          <Button className="rounded-md px-20" onPress={toggelOpen}>
            close
          </Button>
        </View>
      </Modal>
    </View>
  );
}
