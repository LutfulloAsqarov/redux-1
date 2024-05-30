import { useDispatch } from "react-redux";
import { reset } from "../../context/slice/counterSlice";

const Hero = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(reset())}>reset</button>
        </div>
    );
};

export default Hero;
