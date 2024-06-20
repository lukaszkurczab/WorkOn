import React, { ReactNode } from 'react';
import { Modal as RNModal, TouchableOpacity, StyleProp, View, ViewStyle } from 'react-native';
import { styles } from './Modal.styles';

type ModalProps = {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

const Modal: React.FC<ModalProps> = ({ visible, onClose, style, children }) => {
  return (
    <RNModal animationType="none" transparent={true} visible={visible} onRequestClose={onClose}>
      <TouchableOpacity onPress={onClose} style={styles.overlay}>
        <View style={[styles.modalContainer, style]}>
          <View style={styles.content}>{children}</View>
        </View>
      </TouchableOpacity>
    </RNModal>
  );
};

export default Modal;
