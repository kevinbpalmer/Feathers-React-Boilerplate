const initialState = {
  data: []
}

export default function Messages(state = initialState, action) {
  switch (action.type) {
    case 'GET_MESSAGES':
      {
        return {
          ...state,
          data: action.payload
        }
      }
    default:

  }

  return state;
}
