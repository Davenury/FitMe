const meals = {
    Breakfast: 1,
    Lunch: 2,
    Dinner: 3,
    Snack: 4,
    Supper: 5
}

export const sort = (a, b) => {
    return (meals[a.meal] - meals[b.meal]) / Math.abs(meals[a.meal] - meals[b.meal])
}