const initialState = {
  brand: "honda",
  model: "civic",
  year: 2016,
  price: 20000,
};

export default function carReducer(state = initialState, action) {
  switch (action.type) {
    case "car/createCar":
      return {
        ...state,
        brand: action.payload.brand,
        model: action.payload.model,
        year: action.payload.year,
        price: action.payload.price,
      };
    default:
      return state;
  }
}
