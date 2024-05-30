import { useDispatch } from "react-redux";
import { increment } from "../../context/slice/counterSlice";
import { useState } from "react";

const Plus = () => {
    const dispatch = useDispatch();
    const [incValue, setIncValue] = useState("");
    let plusValue = incValue === "" ? 1 : Number(incValue);

    return (
        <div className="plus">
            <input
                type="number"
                value={incValue}
                onChange={(e) => setIncValue(e.target.value)}
                placeholder="increment"
            />
            <button
                onClick={() =>
                    dispatch(increment(plusValue > 0 ? plusValue : 0))
                }
            >
                +
            </button>
        </div>
    );
};

export default Plus;
