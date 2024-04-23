import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { CREATE_NEW_PLAN } from '../../../store/reducers/planReducer';
import styles from './createNewPlanTile.styles';

const CreateNewPlanTile = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleCreateNewPlan = () => {
    dispatch(CREATE_NEW_PLAN());
    navigation.navigate('PlanEditScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>You have no plans</Text>
      <TouchableOpacity style={styles.button} onPress={handleCreateNewPlan}>
        <Text style={styles.buttonText}>Create first plan</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateNewPlanTile;
