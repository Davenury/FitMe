import React from 'react'
import {Box, Typography, List, ListItem, Grid} from '@material-ui/core';

export const Products = ({ products }) => {

    const getProducts = () => {
        return Object.entries(products)
            .map(item => (
            <ListItem key={item[0]}>
                <Grid container direction="row">
                    <Grid item xs={8}><Typography>{item[0]}</Typography></Grid>
                    <Grid item xs={4}><div style={{float: "right"}}><Typography>{item[1]}</Typography></div></Grid>
                </Grid>
            </ListItem>))
    }

    return (
        <Box>
            <Typography variant="h6" color="textPrimary">Products</Typography>
            <List>
                {getProducts()}
            </List>
        </Box>
    )
}