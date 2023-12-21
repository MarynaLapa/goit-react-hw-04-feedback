import { FeedbackList } from "./styled/global";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <FeedbackList>
            {options.map((option, index) => (
                    <li key={ index } >
                    <button
                        type="button"
                        onClick={onLeaveFeedback}
                        name={option}
                    >
                        {option}
                    </button>
                </li>
            ))}
        </FeedbackList>
    )   
}

export default FeedbackOptions;
