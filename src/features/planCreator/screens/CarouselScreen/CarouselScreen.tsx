import React, { useState } from 'react';
import { View } from 'react-native';
import { navigate } from '../../../../utility/navigate';
import { useDispatch } from 'react-redux'; // Poprawienie importu useDispatch
import Layout from '../../../../components/Layout/Layout';
import Carousel from '../../../../components/Carousel/Carousel';
import SelectCreatorTypeItem from '../../components/SelectCreatorTypeItem/SelectCreatorTypeItem';
import { Typography } from '../../../../components/Typography/Typography';
import Button from '../../../../components/Button/Button';
import Modal from '../../../../components/Modal/Modal';
import { CREATE_NEW_PLAN } from '../../store/slice/slice';
import styles from './CarouselScreen.styles';

const CarouselScreen = () => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

  const items = [
    {
      id: 'item-1',
      component: (
        <SelectCreatorTypeItem
          title={'Manual creator'}
          desc={
            'Choose exercises from our database and create your own training plan. In this mode you have full control over what the plan will look like. We recommend this mode for more experienced users.'
          }
          buttonText={'Select'}
          onSelect={() => {
            dispatch(CREATE_NEW_PLAN());
            navigate('ManualCreatorScreen');
          }}
        />
      ),
    },
    {
      id: 'item-2',
      component: (
        <SelectCreatorTypeItem
          title={'AI creator'}
          desc={
            'Tell us what your experiences and expectations are and then our AI will help you create a training plan tailored to you. The mode is recommended for beginners, but remember that artificial intelligence is not infallible.'
          }
          buttonText={'Not ready'}
          onSelect={() => {}}
        />
      ),
    },
    {
      id: 'item-3',
      component: (
        <SelectCreatorTypeItem
          title={'Import plan'}
          desc={
            'Browse our database of training plans and choose the one that suits you best. This mode will also allow you to import a plan sent to you by a trainer or a friend. Just remember that each plan should be adapted to your capabilities.'
          }
          buttonText={'Not ready'}
          onSelect={() => {}}
        />
      ),
    },
  ];

  return (
    <Layout showNavigation={false}>
      <View style={styles.container}>
        <Carousel items={items} />
        <Button variant="text" onPress={() => setModalVisible(true)} style={styles.button}>
          <Typography variant="h2">Skip</Typography>
        </Button>
      </View>
      <Modal visible={modalVisible} onClose={() => setModalVisible(false)}>
        <Typography variant="h3" style={styles.modal_text}>
          Are you sure you want to skip creating a plan?
        </Typography>
        <View style={styles.modal_buttonsWrapper}>
          <Button variant="outlined" onPress={() => setModalVisible(false)} style={styles.modal_button}>
            <Typography variant="h3">No</Typography>
          </Button>
          <Button
            onPress={() => {
              setModalVisible(false);
              navigate('MainScreen');
            }}
            style={styles.modal_button}
          >
            <Typography variant="h3">Yes</Typography>
          </Button>
        </View>
      </Modal>
    </Layout>
  );
};

export default CarouselScreen;
