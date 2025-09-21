import { useCallback, useEffect, useRef } from "react";

export default function Slider({ min, max, val, setVal }) {
    const range = useRef(null);

    const getPercent = useCallback(
        (value) => ((value - min) / (max - min)) * 100,
        [min, max]
    );

    // Set width of the range to decrease from the right side.
    useEffect(() => {
        const percent = getPercent(val);

        if (range.current) {
            range.current.style.width = `${percent}%`;
        }
    }, [val, getPercent]);

    return (
        <div className="w-full relative">
            <input
                type="range"
                min={min}
                max={max}
                value={val}
                step="1"
                className="slider-thumb w-full appearance-none h-3 bg-gray-200 dark:bg-gray-600 rounded-full"
                onChange={(e) => {
                    setVal(parseInt(e.target.value));
                }}
            />
            <div
                className="slider-range absolute top-1/2 transform -translate-y-1/2 h-3 bg-indigo-600 dark:bg-indigo-400 rounded-full"
                ref={range}
            ></div>

            <style jsx>{`
                .slider-thumb::-webkit-slider-thumb {
                    appearance: none;
                    width: 24px;  /* Thumb width */
                    height: 24px; /* Thumb height */
                    background-color: white;
                    border: 2px solid #4f46e5;
                    border-radius: 50%;
                    cursor: pointer;
                    position: relative;
                    margin-top: -11px; /* Center the thumb relative to the track */
                    z-index: 10; /* Ensure thumb is above the range */
                }

                .slider-thumb::-moz-range-thumb {
                    width: 24px;
                    height: 24px;
                    background-color: white;
                    border: 2px solid #4f46e5;
                    border-radius: 50%;
                    cursor: pointer;
                    position: relative;
                    margin-top: -11px; /* Center the thumb relative to the track */
                    z-index: 10;
                }

                .slider-thumb::-ms-thumb {
                    width: 24px;
                    height: 24px;
                    background-color: white;
                    border: 2px solid #4f46e5;
                    border-radius: 50%;
                    cursor: pointer;
                    position: relative;
                    margin-top: -11px; /* Center the thumb relative to the track */
                    z-index: 10;
                }

                .slider-thumb::-webkit-slider-runnable-track {
                    height: 2px;
                    background-color: #e5e7eb;
                    border-radius: 9999px;
                }
            `}</style>
        </div>
    );
}
