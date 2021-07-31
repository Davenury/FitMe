import React from 'react'
import { View } from 'react-native';
import { List, Text, useTheme, Title } from 'react-native-paper';

export const Products = ({ products }) => {

    const theme = useTheme()

    const getProducts = (item) => {
        return <List.Item
            key={item[0]}
            title={item[0]}
            right={() => <Text style={{marginLeft: "30px"}} theme={theme}>{item[1]}</Text>}
        />
    }

    return (
        <View>
            <Title theme={theme}>Products</Title>
            <List.Section
                theme={theme}
            >
                {Object.entries(products).map(item => getProducts(item))}
            </List.Section>
        </View>
    )
}