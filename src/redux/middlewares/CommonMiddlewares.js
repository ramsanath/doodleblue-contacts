export const Logger = store => next => async action => {
    next(action);
    console.log(action.type, action.payload);
}