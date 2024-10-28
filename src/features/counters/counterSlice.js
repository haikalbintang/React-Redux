const initialState = { count: 5, step: 1 };

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "counter/increment":
      return { ...state, count: state.count + action.payload };
    case "counter/decrement":
      return { ...state, count: state.count - action.payload };
    case "counter/resetCount":
      return { ...state, count: 0, step: 1 };
    case "counter/increaseStep":
      return { ...state, step: state.step + action.payload };
    case "counter/decreaseStep":
      return { ...state, step: state.step - action.payload };
    default:
      return state;
  }
}

export function increment(amount) {
  return { type: "counter/increment", payload: amount };
}

export function decrement(amount) {
  return { type: "counter/decrement", payload: amount };
}

export function resetCount() {
  return { type: "counter/resetCount" };
}
export function increaseStep(amount) {
  return { type: "counter/increaseStep", payload: amount };
}
export function decreaseStep(amount) {
  return { type: "counter/decreaseStep", payload: amount };
}
