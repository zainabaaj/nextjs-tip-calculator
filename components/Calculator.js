import React from 'react';

const Calculator = () => {
    // TODO: start coding here!

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
                        />
                    </div>

                    <div className="input-group" id="totalTipPercentageGroup">
                        <div className="input-label-container">
                            <label className="body-text input-label">Select Tip %</label>
                            <small className="body-text input-error" id="totalTipPercentageError">Input field is
                                valid</small>
                        </div>
                        <div className="input-tips-container">
                            <button className="body-l-text input-tip" id="tip5">5%
                            </button>
                            <button className="body-l-text input-tip" id="tip10">10%
                            </button>
                            <button className="body-l-text input-tip" id="tip15">15%
                            </button>
                            <button className="body-l-text input-tip" id="tip25">25%
                            </button>
                            <button className="body-l-text input-tip" id="tip50">50%
                            </button>
                            <input type="number" className="body-l-text input-field" placeholder="Custom"
                                   id="totalTipPercentage"></input>
                        </div>
                    </div>

                    <div className="input-group" id="numberOfPeopleGroup">
                        <div className="input-label-container">
                            <label className="body-text input-label" htmlFor="numberOfPeople">Number of People</label>
                            <small className="body-text input-error" id="numberOfPeopleError">Input field is
                                valid</small>
                        </div>
                        <input
                            type="number"
                            className="body-l-text input-field"
                            placeholder="0"
                            name="Number of people"
                            id="numberOfPeople"

                        />
                    </div>
                </div>
                <div className="card-right">
                    <section className="card-price-container">
                        <div>
                            <b className="body-text card-price-title">Tip Amount</b>
                            <p className="body-s-text card-price-subtitle">/ person</p>
                        </div>
                        <strong className="strong-text card-price-value" id="tipAmount">$0.00</strong>
                    </section>
                    <section className="card-price-container">
                        <div>
                            <b className="body-text card-price-title">Total</b>
                            <p className="body-s-text card-price-subtitle">/ person</p>
                        </div>
                        <strong className="strong-text card-price-value" id="totalPrice">$0.00</strong>
                    </section>
                    <button className="btn btn-primary btn-reset">Reset</button>
                </div>
            </section>
        </main>
    );
};

export default Calculator;