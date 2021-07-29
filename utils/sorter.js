export const meals = {
    Breakfast: 1,
    Lunch: 2,
    Dinner: 3,
    Snack: 4,
    Supper: 5
}

export const days = {
    Monday: 1,
    Tuesday: 2,
    Wendesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
    Sunday: 7
}

export const sort = (a, b) => {
    return (meals[a.meal] - meals[b.meal]) / Math.abs(meals[a.meal] - meals[b.meal])
}

export const sortWithDays = (a, b) => {
    const result = (days[a.day] - days[b.day])
    if(result != 0) return result
    return sort(a, b)
}