import React, {useState} from 'react';
import { Card, CardContent, Box, Typography, SwipeableDrawer } from '@material-ui/core';
import { Products } from './Products'

export const RecipeCard = ({ recipe }) => {

    const [open, setOpen] = useState(false)
    
    return (
        <Box m={1}>
            <Card variant="outlined" onClick={() => setOpen(true)}>
                <CardContent>
                    <Typography variant="h5" color="textPrimary" >{ recipe.name }</Typography>
                    <div style={{float: "right"}}><Typography variant="h6" color="textSecondary">{ recipe.meal }</Typography></div>
                </CardContent>
            </Card>
            <SwipeableDrawer
                anchor="bottom"
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                elevation={3}
            >
                <Box m={2}>
                    <Products products={recipe.products}/>
                </Box>
            </SwipeableDrawer>
        </Box>
    )
}