import { StackNavigator } from 'react-navigation'
import SampleAScreen from '../containers/SampleAScreen'
import SampleBScreen from '../containers/SampleBScreen'
import SampleCScreen from '../containers/SampleCScreen'
import SampleDScreen from '../containers/SampleDScreen'
import SampleEScreen from '../containers/SampleEScreen'
import Style from '../styles/Style'

const AppNavigator = StackNavigator({
  SampleA: { screen: SampleAScreen },
  SampleB: { screen: SampleBScreen },
  SampleC: { screen: SampleCScreen },
  SampleD: { screen: SampleDScreen },
  SampleE: { screen: SampleEScreen },
}, {
  navigationOptions: {
    headerStyle: Style.header,
    headerTitleStyle: Style.headerTitle,
    headerTintColor: '#546E7A',
    headerBackTitle: null,
  },
})

const original = AppNavigator.router.getStateForAction;
AppNavigator.router.getStateForAction = (action, state) => {
  if (!state) return original(action, state);
  // return original(action, state);

  const newRoutes = [];
  newRoutes[state.index] = state.routes[state.index];
  const newState = (action.routeName === 'SampleC') ? { index: state.index, routes: newRoutes } : state;
  return original(action, newState);
}


export const disabledBackScreens = ['SampleB', 'SampleD']
export const landscapeOrientationScreens = ['SampleC', 'SampleE']
export default AppNavigator
