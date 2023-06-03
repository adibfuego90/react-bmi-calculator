import { useState } from "react";

const App = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  // Logic Building for BMI Calculation
  const calBmi = (e) => {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert(" Enter The correct value !");
    } else {
      const bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      if (bmi <= 25) {
        setMessage("You are Under Weight");
      } else if (bmi > 25 && bmi < 30) {
        setMessage("you are Perfect man 👌");
      } else {
        setMessage("Sorry, You are Over Weight");
      }
    }
  };
  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calBmi}>
          <div className="">
            <label htmlFor="">Weight</label>
            <input
              type="text"
              placeholder="Enter Body weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="">
            <label htmlFor="">Height</label>
            <input
              type="text"
              placeholder="Enter Height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" type="submit">
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
