import React from 'react';
import { createTheme, ThemeProvider, Button } from '@material-ui/core';
import { NavigationContainer } from '@react-navigation/native';
import { DarkTheme } from '@react-navigation/native';
import { RecipesScreen } from './components/recipes/Recipes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ViewListIcon from '@material-ui/icons/ViewList';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { ShoppingListEntry } from './components/shopping/ShoppingListEntry';

const Tab = createBottomTabNavigator();

const theme = createTheme({
  palette: {
    primary: {
      main: '#2569A1'
    },
    secondary: {
      main: 'rgba(255, 255, 255, 0.7)'
    },
    type: 'dark'
  }
})

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer theme={DarkTheme}>
        <Tab.Navigator
          screenOptions = {({route}) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let icon;

                if (route.name == "Recipes") 
                  icon = <ViewListIcon color="secondary" fontSize="large"/>
                else if (route.name == "Shopping")
                  icon = <AddShoppingCartIcon color="secondary" fontSize="large"/>
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
    </ThemeProvider>
  );
}
