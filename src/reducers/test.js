export default  (state=null, action = {}) => {
    switch(action.type) {
        case 'RESET_COUNTER':
    return action.payload
        default:
            return state
    }
}