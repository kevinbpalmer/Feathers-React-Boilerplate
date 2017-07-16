const initialState = {
  test: 'Ayyyyy'
}

export default function test(state=initialState, action) {
  switch (action.type) {
    case 'TEST': {
      return {...state, test: action.payload}
       // eslint-disable-line
    }
    default: // eslint-disable-line
        // eslint-disable-line
  }

  return state;
}
