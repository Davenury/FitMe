import React, { useState, useEffect } from 'react'
import { getAllRecipes } from '../../utils/database_client'
import { sortWithDays } from '../../utils/sorter';
import { Select } from './Select';
import { Typography } from '@material-ui/core';
import { View } from 'react-native'
import { Compute } from './Compute'

export const ShoppingListEntry = ({ navigation, route }) => {
    
    const [recipes, setRecipes] = useState([])
    const [indexes, setIndexes] = useState({ start: 0, end: recipes?.length || 0 })
    const [select, setSelect] = useState(true)

    useEffect(() => {
        getAllRecipes()
            .then(data => {
                setRecipes(data.sort((a, b) => sortWithDays(a, b)))
                setIndexes({...indexes, end: data.length})
            })
    }, [])

    const onComputeClicked = () => {
        setSelect(false)
    }

    return (
        <View style={{margin: '1em', flex: 1}}>
            <div style={{marginBottom: "1em"}}>
                <Typography variant="h6" color="textPrimary">Shopping!</Typography>
            </div>
            {
                select ? 
                <Select recipes={recipes} indexes={indexes} setIndexes={(indexes => setIndexes(indexes))} onComputeClicked={onComputeClicked}/> :
                <Compute recipes={recipes} indexes={indexes} onBack={() => setSelect(true)}/>
            }
        </View>
    )    
}