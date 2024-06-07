import React, { ReactNode } from 'react';
import { Modal as RNModal, StyleProp, View, ViewStyle } from 'react-native';
import { styles } from './Modal.styles';

type ModalProps = {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

const Modal: React.FC<ModalProps> = ({ visible, onClose, style, children }) => {
  return (
    <RNModal animationType="fade" transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={[styles.modalContainer, style]}>
          <View style={styles.content}>{children}</View>
        </View>
      </View>
    </RNModal>
  );
};

export default Modal;
