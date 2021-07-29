import React, { useState, useEffect } from 'react'
import { getAllRecipes } from '../../utils/database_client'
import {Autocomplete} from "@material-ui/lab";
import { TextField, Typography, Box, Button } from '@material-ui/core';
import { View } from 'react-native';
import { sortWithDays, meals, days } from '../../utils/sorter';

export const Select = ({ recipes, indexes, setIndexes, onComputeClicked }) => {
    const getOptionsFromRecipes = () => {
        return recipes.map(item => `${item.day} / ${item.meal}`)
    }

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

    const handleStartSelect = ({ target }) => {
        setIndexes({...indexes, start: computeResult(target.value)})
    }

    const handleEndSelect = ({target}) => {
        setIndexes({...indexes, end: computeResult(target.value)})
    }

    const computeRecipes = () => {
        onComputeClicked()
    }

    return (
        <View>
            <Autocomplete
                options={getOptionsFromRecipes()}
                onSelect={handleStartSelect}
                renderInput={params => <TextField {...params} variant="outlined" label="Start meal" />}
            />
            <Box m={2} />
            <Autocomplete
                options={getOptionsFromRecipes()}
                onSelect={handleEndSelect}
                renderInput={params => <TextField {...params} variant="outlined" label="End meal" />}
            />
            <Box m={4} />
            <Button color="primary" variant="contained" onClick={computeRecipes}>
                Generate!
            </Button>
        </View>
    )
}