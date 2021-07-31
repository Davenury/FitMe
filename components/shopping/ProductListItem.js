import React, { useState } from 'react';
import { List, Checkbox } from 'react-native-paper';
import { useTheme } from 'react-native-paper';

export const ProductListItem = ({ name, quantity }) => {

    const theme = useTheme()

    const [checked, setChecked] = useState(false)

    const getLabel = () => {
        return `${name} - ${quantity}`
    }

    return (
        <List.Item
            title={getLabel()}
            theme={theme}
            right={() => (<Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                    setChecked(!checked);
                  }}
                color={theme.colors.primary}
                theme={theme}
            />)}
        />
    )
}