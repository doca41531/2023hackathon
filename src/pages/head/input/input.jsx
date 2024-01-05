import styled from "styled-components"


const INPUT = styled.input`
    width: 80vw;
    height: 33%;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
`


const Input = () => {
    return <>
    <Form>
    <INPUT placeholder="음식 혹은 음식점 명을 적어주세요"/>
    </Form>
    </>
}

export default Input