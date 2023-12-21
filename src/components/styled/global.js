import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const GlobalStyles = createGlobalStyle` 
/* *,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} */

body {
  
  min-height: 100vh;
  background: linear-gradient(to bottom,rgb(228, 194, 240), #350048);
  /* display: grid; */
   place-content: center;
  text-align: center;

}

ul, li {
  list-style: none;
  padding: 0;
  margin: 0;
}
`;

const ListStatics = styled.ul`
    font-size: 24px;
    color: wheat;
    text-align: left;
    margin: auto;
    width: 260px;
`

const Container = styled.div`
        padding: 0 20px 0;
        position: relative; 
       
        h2 {
            text-align: center;
            color: tomato;
            font-size: 48px;
        }
`
const NotificationMessage = styled('p')`
    /* background: linear-gradient(to bottom, #5d326c, #350048); */
    color: #4f4fc2;
    font-size: 36px;
    text-align: center;
    font-weight: 500;
`
const FeedbackList = styled.ul`
        list-style: none;
        display: inline-flex;
        gap: 12px;
        padding: 0px;
        margin: 0px;

        button {
            width: 160px;
            background-color: rgb(255, 251, 0);
            border: none;
            padding: 10px;
            border-radius: 8px;
            text-transform: capitalize;
            font-size: 24px;
            color: #4f4fc2;
            box-shadow: 0 15px 15px rgba(124, 97, 245, 0.3); 
            letter-spacing: 1px;
            transition: all 500;
            &:hover {
                letter-spacing: 3px;
	            background: #7b7bf1;
	            box-shadow: 0 0 5px #4f4fc2, 0 0 15px #4f4fc2, 0 0 30px #4f4fc2, 0 0 60px #4f4fc2;
                color: white;
            }
        }
        
`
export { GlobalStyles, ListStatics, Container, NotificationMessage, FeedbackList};