import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PlanDetailsDayBox from '../../components/planDetailsDayBox/planDetailsDayBox';
import { SET_PLAN_TO_EDIT } from '../../store/reducers/planReducer';
import { removePlan } from '../../store/slice/userSlice';
import styles from './planDetailsScreen.styles';

const PlanDetailsScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const plan = useSelector(store => store.plans.planToPreview);
  const userId = useSelector(store => store.user.data.id);

  const handleEditPress = () => {
    dispatch(SET_PLAN_TO_EDIT(plan));
    navigation.navigate('PlanEditScreen');
  };

  const handleRemovePress = () => {
    const data = {
      userId: userId,
      planId: plan.id,
    };
    dispatch(removePlan(data));
    navigation.navigate('PlansListScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{plan.name}</Text>
      <ScrollView>
        {plan.days.map(day => (
          <PlanDetailsDayBox day={day} key={day.name} />
        ))}
        <View style={styles.buttonsWrapper}>
          <TouchableOpacity onPress={handleEditPress}>
            <View style={styles.buttonWrapper}>
              <Icon name='plus' size={40} style={styles.icon} />
              <Text style={styles.button}>Edit</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleRemovePress}>
            <View style={styles.buttonWrapper}>
              <Icon name='plus' size={40} style={styles.icon} />
              <Text style={styles.button}>Remove</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default PlanDetailsScreen;
