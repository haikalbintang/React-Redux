const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + Number(action.payload),
        isLoading: false,
      };
    case "account/withdraw":
      if (state.balance - action.payload < 0) return state;
      return { ...state, balance: state.balance - Number(action.payload) };
    case "account/reqLoan":
      return {
        ...state,
        balance: state.balance + action.payload.amount,
        loan: Number(action.payload.amount),
        loanPurpose: action.payload.purpose,
      };
    case "account/payLoan":
      if (state.balance - state.loan < 0) return state;
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
        loanPurpose: "",
      };
    case "account/convertingCurrency":
      return { ...state, isLoading: true };
    default:
      return state;
  }
}

export function deposit(amount, currency) {
  if (currency === "USD") return { type: "account/deposit", payload: amount };

  return async (dispatch) => {
    const res = await fetch(
      `https://api.frankfurter.app/latest?base=USD&symbols=${currency}`
    );
    const data = await res.json();
    console.log("DATA", data);
    const convertedAmount = (amount / data.rates[currency]).toFixed(2);

    dispatch({ type: "account/deposit", payload: convertedAmount });
  };
}

export function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
export function reqLoan(amount, purpose) {
  return {
    type: "account/reqLoan",
    payload: { amount, purpose },
  };
}
export function payLoan() {
  return { type: "account/payLoan" };
}
