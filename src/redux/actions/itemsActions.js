export const addToCart = (id) => {
    return {
        type: 'addItem',
        payload: { id },
    }
}

export const removeFromCart = (id) => {
    return {
        type: 'removeItem',
        payload: { id },
    }
}

export const decrement = (id) => { 
    return {
        type: 'decrement',
        payload: { id },
    }
}

export const increment = (id) => { 
    return {
        type: 'increment',
        payload: { id },
    }
}