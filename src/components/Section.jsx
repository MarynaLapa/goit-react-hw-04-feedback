import { Container } from "./styled/global";

const Section = ({title, children}) => {
    return (
        <Container>
            <h2>{title}</h2>
            {children}
        </Container>   
    )
}


export default Section;