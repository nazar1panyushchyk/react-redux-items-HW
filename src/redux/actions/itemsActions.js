export const addToCart = (id) => {
    return {
        type: 'ADD_ITEM',
        payload: { id },
    }
}

export const removeFromCart = (id) => {
    return {
        type: 'REMOVE_ITEM',
        payload: { id },
    }
}

export const decrement = (id) => { 
    return {
        type: 'DECREMENT',
        payload: { id },
    }
}

export const increment = (id) => { 
    return {
        type: 'INCREMENT',
        payload: { id },
    }
}