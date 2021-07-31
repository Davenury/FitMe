import React from 'react';  
import { ProductListItem } from './ProductListItem'
import { View, ScrollView } from 'react-native'
import { List, Button } from 'react-native-paper';
import { useTheme } from 'react-native-paper';

export const Compute = ({ recipes, indexes, onBack }) => {

    const { colors } = useTheme()

    const iterate = (i, result) => {
        Object.entries(recipes[i].products)
            .map(item => {
                if(!(item[0] in result)) {
                    result[item[0]] = item[1]
                } else {
                    result[item[0]] += item[1]
                }
            })
    }

    const compute = () => {
        let result = {}
        let i = indexes.start
        while(i != indexes.end) {
            iterate(i, result)
            i = (i + 1) % recipes.length
        }
        iterate(i, result)
        return result
    }

    const getItems = () => {
        return Object.entries(compute())
            .map(item => (
                <ProductListItem name={item[0]} quantity={item[1]} key={item[0]}/>
            ))
    }

    return (
        <View style={{margin: 16, flex: 1}}>
            <ScrollView>
                <List.Section>
                    {getItems()}
                </List.Section>
            </ScrollView>
            <View style={{margin: 16}} />
            <Button color={colors.primary} mode="contained" onPress={onBack}>
                Back
            </Button>
        </View>
    )
}