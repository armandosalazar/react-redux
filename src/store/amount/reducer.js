const initialState = {
  amount: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'DEPOSIT':
      return {
        ...state,
        amount: state.amount + action.payload,
      }
    case 'WITHDRAW':
      return {
        ...state,
        amount: state.amount + action.payload,
      };
    default:
      return state;
  }
}