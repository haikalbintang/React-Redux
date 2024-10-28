import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw, reqLoan, payLoan } from "./accountSlice";
import { useState } from "react";

function Account() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("IDR");

  const dispatch = useDispatch();
  const {
    loan: currentLoan,
    loanPurpose: currentLoanPurpose,
    balance,
    isLoading,
  } = useSelector((store) => store.account);

  console.log("balance", balance);

  function handleDeposit() {
    if (!depositAmount) return;

    dispatch(deposit(depositAmount, currency));
    setDepositAmount("");
  }

  function handleWithdrawal() {
    if (!withdrawalAmount) return;
    dispatch(withdraw(withdrawalAmount));
    setWithdrawalAmount("");
  }

  function handleReqLoan() {
    if (!loanAmount || !loanPurpose) return;
    dispatch(reqLoan(loanAmount, loanPurpose));
    setWithdrawalAmount("");
  }

  function handlePayLoan() {
    dispatch(payLoan());
  }

  return (
    <div className="p-6">
      <div className="py-4 flex font-bold justify-between items-center">
        <h2 className="text-2xl">My Account Operations</h2>
        <p className="text-3xl">USD {balance}</p>
      </div>
      <div className="w-full">
        <label className="inline-block w-1/5 font-medium">Deposit</label>
        <input
          className="border border-zinc-600 rounded-sm text-sm py-1 px-2 m-2"
          type="number"
          value={depositAmount}
          onChange={(e) => setDepositAmount(e.target.value)}
        />
        <select
          className="border border-zinc-600 py-1 text-sm mx-2 rounded-sm"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value="IDR">Rupiah</option>
          <option value="USD">US Dollar</option>
          <option value="EUR">Euro</option>
          <option value="GBP">British Pound</option>
        </select>

        <button
          className="mx-2 bg-green-500 py-1 px-3 rounded-md"
          onClick={handleDeposit}
          disabled={isLoading}
        >
          {isLoading ? "Converting..." : `Deposit ${depositAmount} ${currency}`}
        </button>
      </div>
      <div>
        <label className="inline-block w-1/5 font-medium">Withdraw</label>
        <input
          className="border border-zinc-600 rounded-sm text-sm py-1 px-2 m-2"
          type="number"
          value={withdrawalAmount}
          onChange={(e) => setWithdrawalAmount(e.target.value)}
        />
        <button onClick={handleWithdrawal}>Withdraw {withdrawalAmount}</button>
      </div>
      <div>
        <label className="inline-block w-1/5 font-medium">Request Loan</label>
        <input
          className="border border-zinc-600 rounded-sm text-sm py-1 px-2 m-2"
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />
        <input
          className="border border-zinc-600 rounded-sm text-sm py-1 px-2 m-2"
          value={loanPurpose}
          onChange={(e) => setLoanPurpose(e.target.value)}
        />
        <button onClick={handleReqLoan}>Request Loan</button>

        {currentLoan > 0 && (
          <div>
            <span>
              Pay back {currentLoan}({currentLoanPurpose})
            </span>
            <button onClick={handlePayLoan}>Pay Loan</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Account;
