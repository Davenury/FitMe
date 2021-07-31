import React from 'react';
import { Provider as PaperProvider, DarkTheme } from 'react-native-paper';
import { NavigationContainer, DarkTheme as NavTheme } from '@react-navigation/native';
import { RecipesScreen } from './components/recipes/Recipes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'
import { ShoppingListEntry } from './components/shopping/ShoppingListEntry';

const Tab = createBottomTabNavigator();

const theme = {
  ...DarkTheme,
  roundness: 2,
  colors: {
    ...DarkTheme.colors,
    primary: '#2569A1',
    accent: 'rgba(255, 255, 255, 0.7)'
  },
  dark: true
}

export default function App() {

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={NavTheme}>
        <Tab.Navigator
          screenOptions = {({route}) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let icon;

                if (route.name == "Recipes") 
                  icon = <Icon name="list" color="#808080" />
                else if (route.name == "Shopping")
                  icon = <Icon name="shopping-cart" color="#808080" />
                return icon
              }
          })}
        >
          <Tab.Screen 
            name="Recipes"
            component={RecipesScreen}
          />
          <Tab.Screen 
            name="Shopping"
            component={ShoppingListEntry}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
