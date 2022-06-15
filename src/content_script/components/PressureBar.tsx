import { useState } from "react";

const PressureBar = () => {
    const [selectedTime, setSelectedTime] = useState<string | undefined>(undefined);

    return (
        <div id="p-dropdown-select-time">
            <select value={selectedTime} onChange={(event) => setSelectedTime(event.target.value)}>
                <option value={undefined}>Select time</option>
                <option value="1">1 Minute</option>
                <option value="5">5 Minutes</option>
                <option value="10">10 Minutes</option>
                <option value="15">15 Minutes</option>
                <option value="30">30 Minutes</option>
            </select>

            <div className="pStatsBarItem">
                <div className="pStatsBarItemInner salesItem">
                    <div>
                        <div className="pStatsBarItemInnerValue salesValue">
                            <span className="pStatsBarItemValue">-</span>
                        </div>
                        <div className="pStatsBarItemText">sales</div>
                    </div>
                </div>
                <div className="pStatsBarItemInner listedItem">
                    <div>
                        <div className="pStatsBarItemInnerValue listedValue">
                            <span className="pStatsBarItemValue">-</span>
                        </div>
                        <div className="pStatsBarItemText">listed</div>
                    </div>
                </div>
                <div className="pStatsBarItemInner pressureItem">
                    <div>
                        <div className="pStatsBarItemInnerValue pressureValue">
                            <span className="pStatsBarItemValue">-</span>
                        </div>
                        <div className="pStatsBarItemText">pressure</div>
                    </div>
                </div>
            </div>

            <div id="p-timer">
                <div className="timer-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="stopwatch" className="svg-inline--fa fa-stopwatch fa-w-14" role="img" viewBox="0 0 448 512"><path fill="currentColor" d="M432 304c0 114.9-93.1 208-208 208S16 418.9 16 304c0-104 76.3-190.2 176-205.5V64h-28c-6.6 0-12-5.4-12-12V12c0-6.6 5.4-12 12-12h120c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-28v34.5c37.5 5.8 71.7 21.6 99.7 44.6l27.5-27.5c4.7-4.7 12.3-4.7 17 0l28.3 28.3c4.7 4.7 4.7 12.3 0 17l-29.4 29.4-.6.6C419.7 223.3 432 262.2 432 304zm-176 36V188.5c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12V340c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z" /></svg>
                </div>
                <span id="countdown">
                    -
                </span>
            </div>
        </div>
    );
}

export default PressureBar;