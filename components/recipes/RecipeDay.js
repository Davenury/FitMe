import React from 'react';
import { Typography } from '@material-ui/core';
import { RecipeCard } from './RecipeCard'
import { sort } from '../../utils/sorter'

export const RecipeDay = ({ recipes, day }) => {

    const getRecipes = () => {
        return recipes
        .sort((a,b) => sort(a, b))
        .map((recipe, index) => (<RecipeCard recipe={recipe} key={`${day}-${index}`}/>))
    }

    return(
        <div style={{marginLeft: "1em", marginRight: "1em"}}>
            <Typography variant="h6" color="textSecondary">
                {day}
            </Typography>
            {getRecipes()}
        </div>
    )
}