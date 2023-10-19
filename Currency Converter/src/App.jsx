// import "./App.css";
import { useState } from "react";
import { InputBox } from "./Components";
import useCurrencyInfo from "./hooks/useCurrencyinfo";
function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="w-full  h-screen flex  justify-center items-center bg-slate-500 bg-cover bg-no-repeat">
      <div
        className="w-full h-full m-3 my-4"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/6781340/pexels-photo-6781340.jpeg?auto=compress&cs=tinysrgb&w=600")`,
          backgroundSize: "cover",
        }}
      >
        Currency Converter
      </div>
      <div className="w-full h-full ">
        <div className="w-full h-full max-w-md mx-auto border border-gray-60 rounded-lg py-32 px-8 backdrop-blur-sm bg-white/30">
          <h1 className="text-3xl px-8 py-2 bg-black text-white rounded-md  font-extrabold m-4 text-center">
            Currency Converter
          </h1>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1 ">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-gray-950 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                onAmountChange={(amount) => setAmount(amount)}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-950 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
