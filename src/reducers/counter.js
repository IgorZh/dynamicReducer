export default (name) => (state = 0, action) => {
  if(action.name !== name) return state;
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
