import React, {useState} from 'react';
import { Products } from './Products'
import { Card, useTheme, Title, Text, Banner } from 'react-native-paper'
import { View } from 'react-native'

export const RecipeCard = ({ recipe }) => {


    const renderContent = () => (
        <View>
            <Products products={recipe.products}/>
        </View>
    )

    const [visible, setVisible] = useState(false)

    const theme = useTheme()
    
    return (
        <>
            <View>
                <Card mode="outlined" onPress={() => setVisible(!visible)} theme={theme}>
                    <Card.Content>
                        <Title theme={theme}>{ recipe.name }</Title>
                        <View style={{float: "right"}}><Text theme={theme}>{ recipe.meal }</Text></View>
                    </Card.Content>
                </Card>
            </View>
            <Banner
                actions = {[
                    {
                        label: "Ok",
                        onPress: () => setVisible(false)
                    }
                ]}
                visible={visible}
                theme={theme}
                style={{marginLeft: "10px", marginRight: "10px"}}
            >
                {renderContent()}
            </Banner>           
        </>
    )
}