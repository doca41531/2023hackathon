import styled from "styled-components"


const INPUT = styled.input`
    width: 80vw;
    height: 33%;
    color: black;
    font-size: 55px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
const Form = styled.form`   
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const LaBel = styled.label`
    width: 80vw;
    height: 33%;
    color: black;
    font-size: 55px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
const Div = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
`

const Input = () => {
    return <>
    <Form>
        <Div>
            <LaBel>오늘 저녁은 이걸로 ?</LaBel>
        </Div>
    <INPUT placeholder="매장 또는 메뉴 입력"/>
    </Form>
    </>
}

export default Input