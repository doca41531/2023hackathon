import styled from "styled-components";
import Input from "./From/input";


const Header = styled.header`
    height: 13vh;
    display: flex;
    justify-content: center;
    align-content: center;
`
const Head = () => {
    return <>
    <Header>
            <Input />
    </Header>
    </>
}

export default Head