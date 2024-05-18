import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { Dropdown } from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SELECT_PLAN, SELECT_DAY } from '../../../store/slice/sessionSlice';
import { START_TRAINING } from '../../../store/reducers/trainingReducer';
import styles from './beginTrainingTile.styles';

const BeginTrainingTile = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const plans = useSelector(state => state.user.data.plans);
  const selectedPlan = useSelector(state => state.session.selectedPlan);
  const selectedDay = useSelector(state => state.session.selectedDay);

  const handleSelectPlan = plan => {
    dispatch(SELECT_PLAN(plan));
    dispatch(SELECT_DAY(null));
  };

  const handleSelectDay = day => {
    dispatch(SELECT_DAY(day));
  };

  const handleStartPress = () => {
    if (selectedPlan && selectedDay) {
      dispatch(START_TRAINING({ plan: selectedPlan, day: selectedDay }));
      navigation.navigate('WorkoutScreen');
    }
  };

  return (
    <>
      {plans.length > 0 && (
        <View style={styles.container}>
          <View style={styles.textWrapper}>
            <Text style={styles.text}>Begin training</Text>
            <Dropdown
              selectedTextStyle={styles.selectedTextStyle}
              data={plans}
              maxHeight={300}
              labelField='name'
              valueField='name'
              value={selectedPlan ? selectedPlan.name : 'Select plan'}
              onChange={item => {
                handleSelectPlan(item);
              }}
              style={styles.dropdown}
            />
            <Dropdown
              selectedTextStyle={styles.selectedTextStyle}
              data={selectedPlan.days}
              maxHeight={300}
              labelField='name'
              valueField='name'
              value={selectedDay ? selectedDay.name : 'Select day'}
              onChange={item => {
                handleSelectDay(item);
              }}
              style={styles.dropdown}
            />
          </View>
          <TouchableOpacity style={styles.iconWrapper} onPress={handleStartPress}>
            <Icon name='play' size={45} style={styles.icon} />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default BeginTrainingTile;
