import { useState } from "react";

function App() {
	const [calc, setCalc] = useState("");
	const [result, setResult] = useState("");

	const ops = ['/', '*', '+', '-', '.'];

	const updateCalc = value => {
		if (
			ops.includes(value) && calc === '' ||
			ops.includes(value) && ops.includes(calc.slice(-1))
			){
				return;
			}
			// If the value was an operator and the calculation has nothing
			// or value was an operators and the last value was also an operator
			// We're going to return and not do anything

			if (!ops.includes(value)) {
				setResult(eval(calc + value).toString())
			}
		
		setCalc(calc + value);

		//If the last value was not an operator, we're gonna set the result to eval
		//
	} //Allows us to set values on display class

	const createDigits = () => {
		const digits = [];

		for (let i = 1; i < 10; i++){
				digits.push(
					<button onClick={() => updateCalc(i.toString())} key={i}>
						{/* Allows us on clicking to update display */}
						{i}
					</button>
				)
		} //Allows us create digits 1-9

		return digits
	}

	const calculate = () => {
		setCalc(eval(calc).toString())
	}
	// Our current calcuation will be evaluated allowing us to return it

	const deleteLast = () => {
		if(calc == ''){
			return;
		}
		//Return if nothing in calculation

		const value = calc.slice(0, -1) //Removes last value

		setCalc(value); //Sets calculation to value with now deleted value
	}
	return (
		<div className="App">
			<div className = "calculator">
				<div className = "display">
					{result ? <span>({result || "0"})</span> : ''}&nbsp;					
					{calc || "0"}
				</div>
				<div className="operators">
					{ <button onClick={() => updateCalc('/')}>/</button>}
					<button onClick={() => updateCalc('*')}>x</button>
					<button onClick={() => updateCalc('+')}>+</button>
					<button onClick={() => updateCalc('-')}>-</button>

					<button onClick={deleteLast}>DEL</button>
				</div>
				<div className="digits">
					{createDigits()}
					<button onClick={() => updateCalc('0')}>0</button>
					<button onClick={() => updateCalc('.')}>.</button>


					<button onClick={calculate}>=</button>
					{/* Calls the calculate method when clicking = */}

				</div>


				{/* Creates buttons for every single function in a calculator including:
					1. operators
					2. digits
					3. decimal
					4. Equals */}
			</div>
		</div>
	);
}

export default App;
