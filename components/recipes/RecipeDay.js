import React from 'react';
import { Title, useTheme } from 'react-native-paper';
import { RecipeCard } from './RecipeCard'
import { sort } from '../../utils/sorter'
import { View } from 'react-native'

export const RecipeDay = ({ recipes, day }) => {

    const theme = useTheme()

    const getRecipes = () => {
        return recipes
        .sort((a,b) => sort(a, b))
        .map((recipe, index) => (<RecipeCard recipe={recipe} key={`${day}-${index}`}/>))
    }

    return(
        <View style={{marginLeft: "1em", marginRight: "1em", marginBottom: "1em"}}>
            <Title theme={theme}>
                {day}
            </Title>
            {getRecipes()}
        </View>
    )
}