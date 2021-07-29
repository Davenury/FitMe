import { Button } from "@material-ui/core"
import React, { useEffect, useState } from 'react';
import { Typography, Divider } from "@material-ui/core";
import { getAllRecipes } from '../../utils/database_client'
import { RecipeDay } from './RecipeDay'
import { ScrollView, View } from 'react-native';

function groupBy(arr, property) {
    return arr.reduce((memo, x) => {
      if (!memo[x[property]]) { memo[x[property]] = []; }
      memo[x[property]].push(x);
      return memo;
    }, {});
  }

export const RecipesScreen = ({ navigation, route }) => {

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        getAllRecipes()
            .then(data => setRecipes(data))
    }, [])

    const getRecipesWithDay = () => {
        const groupped = groupBy(recipes, 'day')
        return Object.entries(groupped)
            .map(item => (<div key={item[0]}><RecipeDay recipes={item[1]} day={item[0]} /><Divider /></div>))
    }

    return (
        <View style={{margin: '1em', flex: 1}}>
            <div style={{marginBottom: "1em"}}>
                <Typography variant="h6" color="textPrimary">Recipes</Typography>
            </div>
            <ScrollView>
                {getRecipesWithDay()}
            </ScrollView>
        </View>
    )
}