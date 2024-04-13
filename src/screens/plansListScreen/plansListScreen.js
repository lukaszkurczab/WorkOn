import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PlanBanner from '../../components/planBanner/planBanner';
import styles from './plansListScreen.styles';
import { useNavigation } from '@react-navigation/native';

const PlansListScreen = () => {
  const navigation = useNavigation();
  const plans = useSelector(store => store.user.data.plans);
  const isLoading = useSelector(store => store.user.isLoading);

  const handleAddPlan = () => {
    navigation.navigate('CreatePlanScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your plans</Text>
      {!isLoading && (
        <>
          <View>
            {plans.map(plan => (
              <PlanBanner plan={plan} img='test' key={plan.id} />
            ))}
          </View>
          <TouchableOpacity onPress={handleAddPlan}>
            <View style={styles.buttonWrapper}>
              <Icon name='plus' size={45} style={styles.icon} />
              <Text style={styles.button}>Add</Text>
            </View>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default PlansListScreen;
