"use strict";

import { COUNTER_BUTTON_CREATE, COUNTER_BUTTON_ADD } from './counterButtonAC';

const initState={

  // ключ - идентификатор счётчика, значение - число нажатий
  counters: {},

}

// в редьюсере state - это не весь state Redux, а только тот раздел state,
// за который отвечает данный редьюсер

function counterButtonReducer(state=initState,action) {
  switch (action.type) {

    case COUNTER_BUTTON_CREATE: {
      // надо создать новый счётчик
      // редьюсер ВСЕГДА должен возвращаеть новый state а не изменять старый!
      console.log('action:',action);
      console.log('state до обработки редьюсером:',state);
      let newState={...state,
        counters:{...state.counters,
          [action.counterid]:0
        }
      };
      console.log('state после обработки редьюсером:',newState);
      return newState;
    }
    
    case COUNTER_BUTTON_ADD: {
      console.log('action:',action);
      console.log('state до обработки редьюсером:',state);
      let newState={...state,
        counters:{...state.counters,
          [action.counterid]:state.counters[action.counterid]+action.addvalue
        }
      };
      console.log('state после обработки редьюсером:',newState);
      return newState;
    }

    default:
      return state;
  }
}

export default counterButtonReducer;
