

const initialCountValue = {
    count: 0
}

export const counterReducer = (state = initialCountValue, action) => {
    switch(action.type) {
        case 'INCREMENT_COUNT':
            return {
                count: state.count + 1
            }

        case 'RESET':
            return {
                count: 0
            }

        case 'DECREMENT_COUNT':
            return {
                count: state.count - 1
            }

        default:
            return state;
    }
}

