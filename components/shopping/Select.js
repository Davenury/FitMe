import React, { useState } from 'react'
import { View, ScrollView } from 'react-native';
import { meals, days } from '../../utils/sorter';
import { useTheme, Button, List } from 'react-native-paper';
import { groupBy } from '../../utils/groupBy';


export const Select = ({ recipes, indexes, setIndexes, onComputeClicked }) => {
    const getOptionsFromRecipes = () => {
        return recipes.map(getLabelForRecipe)
    }

    const [expanded, setExpanded] = useState({ start: false, end: false })
    const [titles, setTitles] = useState({start: "Start meal", end: "End meal"})

    const groupped = groupBy(recipes, 'day')

    const getLabelForRecipe = recipe => `${recipe.day} / ${recipe.meal}`

    const theme = useTheme()

    const computeResult = (value) => {
        let result = 0
        Object.keys(days).forEach(item => {
            if (value.includes(item)) result += 5*(days[item]-1)
        })
        Object.keys(meals).forEach(item => {
            if(value.includes(item)) result += meals[item] - 1
        })
        return result
    }

    const handleStartSelect = (value) => {
        setExpanded({...expanded, start: false})
        setTitles({...titles, start: value})
        setIndexes({...indexes, start: computeResult(value)})
    }

    const handleEndSelect = (value) => {
        setExpanded({...expanded, end: false})
        setTitles({...titles, end: value})
        setIndexes({...indexes, end: computeResult(value)})
    }

    const computeRecipes = () => {
        onComputeClicked()
    }

    const getListItems = (recipes, index) => {
        return recipes.map(recipe => (
            <List.Item
                key={getLabelForRecipe(recipe)}
                title={getLabelForRecipe(recipe)}
                theme={theme}
                onPress={index === 'start' ? () => handleStartSelect(getLabelForRecipe(recipe)) : () => handleEndSelect(getLabelForRecipe(recipe))}
            />
        ))
    }

    const getAccorditions = (index) => {
        return Object.entries(groupped)
            .map(item => (
                <List.Accordion
                    key={item[0]}
                    title={item[0]}
                    theme={theme}
                >
                    {getListItems(item[1], index)}
                </List.Accordion>
            ))
    }

    return (
        <View style={{flex: 1}}>
            <ScrollView>
                <List.Accordion
                    title={titles.start}
                    theme={theme}
                    expanded={expanded.start}
                    onPress={() => setExpanded({...expanded, start: true})}
                >
                    {getAccorditions('start')}
                </List.Accordion>
                <View style={{margin: 24}} />
                <List.Accordion
                    title={titles.end}
                    theme={theme}
                    expanded={expanded.end}
                    onPress={() => setExpanded({...expanded, end: true})}
                >
                    {getAccorditions('end')}
                </List.Accordion>
                <View style={{margin: 48}} />
            </ScrollView>
            <Button color={theme.colors.primary} mode="contained" onPress={computeRecipes}>
                Generate!
            </Button>
        </View>
    )
}