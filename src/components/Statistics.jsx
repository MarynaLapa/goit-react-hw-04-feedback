
import { ListStatics } from "./styled/global";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <ListStatics>
            <li>
                <p>Good: {good}</p>
            </li>
            <li>
                <p>Neutral: {neutral}</p>
            </li>
            <li>
                 <p>Bad: {bad}</p>
            </li>
            <li>
                <p>Total: {total}</p>
            </li>
            <li>
                <p>Positive feedback: {positivePercentage}%</p>
            </li>
        </ListStatics>    
    )
}

export default Statistics;
