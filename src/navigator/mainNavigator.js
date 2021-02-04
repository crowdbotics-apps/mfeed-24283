import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList200777Navigator from '../features/NotificationList200777/navigator';
import Settings200776Navigator from '../features/Settings200776/navigator';
import Settings200768Navigator from '../features/Settings200768/navigator';
import UserProfile200766Navigator from '../features/UserProfile200766/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList200777: { screen: NotificationList200777Navigator },
Settings200776: { screen: Settings200776Navigator },
Settings200768: { screen: Settings200768Navigator },
UserProfile200766: { screen: UserProfile200766Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
