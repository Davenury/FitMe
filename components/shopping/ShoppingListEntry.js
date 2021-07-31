import React, { useState, useEffect } from 'react'
import { getAllRecipes } from '../../utils/database_client'
import { sortWithDays } from '../../utils/sorter';
import { Select } from './Select';
import { View } from 'react-native'
import { Compute } from './Compute'
import { Title, useTheme } from 'react-native-paper'

export const ShoppingListEntry = ({ navigation, route }) => {
    
    const theme = useTheme()

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
        <View style={{margin: 24, flex: 1}}>
            <View style={{marginBottom: 16}}>
                <Title theme={theme}>Shopping!</Title>
            </View>
            {
                select ? 
                <Select recipes={recipes} indexes={indexes} setIndexes={(indexes => setIndexes(indexes))} onComputeClicked={onComputeClicked}/> :
                <Compute recipes={recipes} indexes={indexes} onBack={() => setSelect(true)}/>
            }
        </View>
    )    
}