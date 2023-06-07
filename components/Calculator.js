import React, { useState } from "react";

const Calculator = () => {
    // TODO: start coding here!
    //bill input totalBill
    // button tip5 tip10 tip15 tip25 tip50 
    // custom tip input totalTipPercentage
    // number of people input numberOfPeople
    // resutl tip amount tipAmount
    //result total totalPrice
    // button reset class btn-reset
    const [numberOfPeople, setNumberOfPeople] = useState("");

    const [percentage, setPercentage] = useState("");
    const [tipAmount, setTipAmount] = useState("0.00");
    const [totalAmount, setTotalAmount] = useState("0.00");
    const [totalBill, setTotalBill] = useState("");
    const [totalTipPercentage, setTotalTipPercentage] = useState("");

    const calculateBill = (value) => {
        setNumberOfPeople(parseInt(value));
        let numberOfPeopleValue = parseInt(value);
        console.log(totalBill)
        console.log(percentage)
        console.log(numberOfPeopleValue)
        console.log(numberOfPeople)
        if (numberOfPeopleValue == 0 || isNaN(numberOfPeopleValue)) {
            numberOfPeopleValue = 1;
        }
        const calculatedTipAmount = (totalBill * percentage) / numberOfPeopleValue;
        const total = (totalBill / numberOfPeopleValue) + calculatedTipAmount;
        console.log(calculatedTipAmount)

        setTipAmount(calculatedTipAmount);
        setTotalAmount(total);
    };

    const percentagecalc = (value) => {
        setPercentage(value);
    };

    const resetCalculator = () => {
        setPercentage("");
        setTipAmount("0.00");
        setTotalAmount("0.00");
        setTotalBill("");
        setNumberOfPeople("");
        setTotalTipPercentage("");
    };
    return (
        <main>
            <img
                src="./icons/logo.svg"
                className="logo"
                alt="Splitter logo. 'SPLI' on one line and 'TTER' on another to indicate splitting."
            />
            <section className="card">
                <div className="card-left">
                    <div className="input-group" id="totalBillGroup">
                        <div className="input-label-container">
                            <label className="body-text input-label" htmlFor="totalBill">Bill</label>
                            <small className="body-text input-error" id="totalBillError">Input field is valid</small>
                        </div>
                        <input
                            type="number"
                            className="body-l-text input-field"
                            placeholder="0"
                            name="Total bill value"
                            id="totalBill"
                            value={totalBill}
                            onChange={(e) => setTotalBill(parseInt(e.target.value))}
                        />
                    </div>

                    <div className="input-group" id="totalTipPercentageGroup">
                        <div className="input-label-container">
                            <label className="body-text input-label">Select Tip %</label>
                            <small className="body-text input-error" id="totalTipPercentageError">Input field is
                                valid</small>
                        </div>
                        <div className="input-tips-container">
                            <button className="body-l-text input-tip" id="tip5" onClick={() => percentagecalc(0.05)}>5%
                            </button>
                            <button className="body-l-text input-tip" id="tip10" onClick={() => percentagecalc(0.1)}>10%
                            </button>
                            <button className="body-l-text input-tip" id="tip15" onClick={() => percentagecalc(0.15)}>15%
                            </button>
                            <button className="body-l-text input-tip" id="tip25" onClick={() => percentagecalc(0.25)}>25%
                            </button>
                            <button className="body-l-text input-tip" id="tip50" onClick={() => percentagecalc(0.5)}>50%
                            </button>
                            <input type="number" className="body-l-text input-field" placeholder="Custom"
                                id="totalTipPercentage"
                                value={totalTipPercentage}
                                onChange={(e) => {
                                    setTotalTipPercentage(e.target.value)
                                    percentagecalc(parseFloat(e.target.value / 100))
                                }
                                } ></input>
                        </div>
                    </div>

                    <div className="input-group" id="numberOfPeopleGroup">
                        <div className="input-label-container">
                            <label className="body-text input-label" htmlFor="numberOfPeople" >Number of People</label>
                            <small className="body-text input-error" id="numberOfPeopleError">Input field is
                                valid</small>
                        </div>
                        <input
                            type="number"
                            className="body-l-text input-field"
                            placeholder="0"
                            name="Number of people"
                            value={numberOfPeople}
                            id="numberOfPeople"
                            onChange={(e) => {
                                calculateBill(parseInt(e.target.value));

                            }}
                        />
                    </div>
                </div>
                <div className="card-right">
                    <section className="card-price-container">
                        <div>
                            <b className="body-text card-price-title">Tip Amount</b>
                            <p className="body-s-text card-price-subtitle">/ person</p>
                        </div>
                        <strong className="strong-text card-price-value" id="tipAmount">{`$${tipAmount}`}</strong>
                    </section>
                    <section className="card-price-container">
                        <div>
                            <b className="body-text card-price-title">Total</b>
                            <p className="body-s-text card-price-subtitle">/ person</p>
                        </div>
                        <strong className="strong-text card-price-value" id="totalPrice">{`$${totalAmount}`}</strong>
                    </section>
                    <button className="btn btn-primary btn-reset" onClick={resetCalculator}>Reset</button>
                </div>
            </section>
        </main >
    );
};

export default Calculator;