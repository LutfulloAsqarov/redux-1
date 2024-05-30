import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement } from "../../context/slice/counterSlice";

const Minus = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);
    const [decValue, setDecValue] = useState("");
    let value = decValue === "" ? 1 : Number(decValue);

    useEffect(() => {
        localStorage.setItem("count", count);
    }, [count]);

    return (
        <div className="minus">
            <input
                type="number"
                value={decValue}
                onChange={(e) => setDecValue(e.target.value)}
                placeholder="decrement"
            />

            <button
                disabled={count < value}
                onClick={() => dispatch(decrement(value))}
            >
                -
            </button>
        </div>
    );
};

export default Minus;
