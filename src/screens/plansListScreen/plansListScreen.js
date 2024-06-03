import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PlanBanner from '../../components/planBanner/planBanner';
import styles from './plansListScreen.styles';
import { useNavigation } from '@react-navigation/native';
import { CREATE_NEW_PLAN } from '../../store/reducers/planReducer';
import Navigation from '../../components/navigation/Navigation';

const PlansListScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const plans = useSelector(state => state.user.data.plans);
  const isLoading = useSelector(state => state.user.isLoading);

  const handleAddPlan = () => {
    dispatch(CREATE_NEW_PLAN());
    navigation.navigate('PlanEditScreen');
  };

  return (
    <Navigation>
      <View style={styles.container}>
        <Text style={styles.title}>Your plans</Text>
        {!isLoading && (
          <>
            <View>
              {plans.map(plan => (
                <PlanBanner plan={plan} img="test" key={plan.id} />
              ))}
            </View>
            <TouchableOpacity onPress={handleAddPlan}>
              <View style={styles.buttonWrapper}>
                <Icon name="plus" size={45} style={styles.icon} />
                <Text style={styles.button}>Add</Text>
              </View>
            </TouchableOpacity>
          </>
        )}
      </View>
    </Navigation>
  );
};

export default PlansListScreen;
