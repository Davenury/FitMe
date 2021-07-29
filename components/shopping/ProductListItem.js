import React, { useState } from 'react';
import { Checkbox, ListItem, ListItemText, ListItemSecondaryAction, Typography } from '@material-ui/core';
import { View } from 'react-native'

export const ProductListItem = ({ name, quantity }) => {

    const [checked, setChecked] = useState(false)

    const getLabel = () => {
        return `${name} - ${quantity}`
    }

    return (
        <ListItem>
                <ListItemText>
                    <Typography color="textPrimary">{getLabel()}</Typography>
                </ListItemText>
                <ListItemSecondaryAction>
                    <Checkbox
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                        color="primary"
                        edge="end"
                    />
                </ListItemSecondaryAction>
        </ListItem>
    )
}