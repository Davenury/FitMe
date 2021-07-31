import React, { useEffect, useState } from 'react';
import { getAllRecipes } from '../../utils/database_client'
import { RecipeDay } from './RecipeDay'
import { ScrollView, View, Text } from 'react-native';
import { Divider } from 'react-native-elements';
import { groupBy } from '../../utils/groupBy'
import { Title, useTheme } from 'react-native-paper'

export const RecipesScreen = () => {

    const theme = useTheme()

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        getAllRecipes()
            .then(data => setRecipes(data))
    }, [])

    const getRecipesWithDay = () => {
        const groupped = groupBy(recipes, 'day')
        return Object.entries(groupped)
            .map(item => (<View key={item[0]}><RecipeDay recipes={item[1]} day={item[0]} /><Divider style={{margin: 4}} /></View>))
    }

    return (
        <View style={{margin: 24, flex: 1}}>
            <View style={{marginBottom: 16}}>
                <Title theme={theme}>Recipes</Title>
            </View>
            <ScrollView>
                {getRecipesWithDay()}
            </ScrollView>
        </View>
    )
}