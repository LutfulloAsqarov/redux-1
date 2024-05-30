import { useSelector } from "react-redux";

const Header = () => {
    let count = useSelector((state) => state.counter.value);
    return (
        <div>
            <h1 className="title">Counter</h1>
            <h1>{count}</h1>
        </div>
    );
};

export default Header;
