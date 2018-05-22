import { combineReducers } from 'redux';

import counterButtonReducer from "../components/CounterButton/counterButtonReducer";

let combinedReducer=combineReducers({
    // редьюсер counterButtonReducer отвечает за раздел state под именем counterButton
    counterButton: counterButtonReducer, 
    // + другие редьюсеры
});

export default combinedReducer;
