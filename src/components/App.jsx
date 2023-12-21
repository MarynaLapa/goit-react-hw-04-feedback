import FeedbackOptions from "./FeedbackOptions.jsx"
import { useState } from "react"
import Section from "./Section"
import { GlobalStyles } from "./styled/global.js" 
import Notification from "./Notification.jsx"
import Statistics from "./Statistics.jsx"

const App = () => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const options = ['good', 'neutral', 'bad']

    const heandlerClick = ({ target: { name } }) => {
        switch (name) {
            case 'good': setGood((prev) => prev + 1)
                break 
            case 'neutral': setNeutral((prev) => prev + 1)
                break
            default:
                setBad((prev) => prev + 1)
       } 
    }

    const countTotalFeedback = () => {
        return good + neutral + bad;
    }
    

    const countPositiveFeedbackPercentage = () => {
        return good > 0 ? Math.round((good * 100) / countTotalFeedback()) : 0;
    }

    const total = countTotalFeedback(); 
    
return (
    <>
        <GlobalStyles/>
        <Section title="Please leave feedback">
            <FeedbackOptions
                options={Object.values(options)}
                onLeaveFeedback={heandlerClick}
            />
        </Section>

        <Section title="Statistics">
            {total === 0 ?
                (<Notification
                    message="There is no feedback"
                />)
            :
                (<Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={countTotalFeedback()}
                    positivePercentage={countPositiveFeedbackPercentage()}
                />)
            }
            
        </Section>
                            
    </>
  )
    
}

export default App 