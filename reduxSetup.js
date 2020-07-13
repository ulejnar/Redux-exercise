const INITIAL_STATE = {face: "ʘ‿ʘ"};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "showHappy":
      return {...state, face: action.payload}
    
    case "showSad":
      return {...state, face: action.payload}
    
    case "showAngry":
      return {...state, face:action.payload}

    case "showConfused":
      return {...state, face:action.payload}

    default:
      return state;  
  }
}

const store = Redux.createStore(rootReducer);

const currentFace = store.getState().face;
emojiText.innerText = currentFace;