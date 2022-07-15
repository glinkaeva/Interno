import styled from "styled-components"

import { base } from '../styles/base'

import arrow from '../images/svg/long-arrow.svg'

const FormWrapper = styled.form`
    position: fixed;
    width: 60%;
    height: fit-content;
    top: 10%;
    left: 20%;
    border: 3px solid;
    padding: 40px;
    background: ${base.colors.lightbeige};
    border-radius: 60px 60px 60px 0px;
    z-index: 10;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    transition: 0.5s ease-in-out;

    transform: ${({openForm}) => openForm ? 'scale(1)' : 'scale(0)'};

    @media(max-width: 960px){
        left: 10%;
        width: 80%;
    }

    @media(max-width: 560px){
        left: 5%;
        width: 90%;
    }

    @media(max-width: 560px){
        top: 15%;
        padding: 40px 20px;
    }

    @media(max-width: 480px){
        width: 98%;
        top: 1%;
        left: 1%;
    }
`

const Headline = styled.p`
    font-family: ${base.fontFamily.headline};
    font-style: normal;
    font-weight: 400;
    font-size: 46px;
    line-height: 88px;
    text-align: center;
    letter-spacing: 1.7px;
    color: ${base.colors.headlineColor};
    margin-bottom: 30px;

    @media(max-width: 560px){
        font-size: 42px;
        line-height: 62px;
    }

    @media(max-width: 480px){
        font-size: 34px;
        margin-bottom: 15px;
    }
`

const CloseButtonCont = styled.div`
    width: 30px;
    height: 25px;
    position: absolute;
    top: 30px;
    right: 45px;
    cursor: pointer;
`

const CloseButtonItem = styled.div`
    width: 100%;
    height: 5px;
    background: ${base.colors.headlineColor};
    cursor: pointer;

    &:first-child{
        transform: rotate(45deg) translateX(3px);
    }

    &:last-child{
        transform: rotate(-45deg) translateX(4px);
    }
`

const Input = styled.input`
    width: 100%;
    height: 50px;
    border-radius: 50px;
    border: 2px solid ${base.colors.beige};
    padding: 5px 15px;
    font-family: ${base.fontFamily.text};
    color: ${base.colors.textColor};
    font-size: 18px;
    margin-bottom: 30px;

    @media(max-width: 560px){
        font-size: 16px;
    }

    @media(max-width: 480px){
        height: 35px;
        padding: 0px 15px;
        margin-bottom: 15px;
    }
`

const Area = styled.textarea`
    width: 100%;
    height: 150px;
    border-radius: 30px;
    border: 2px solid ${base.colors.beige};
    padding: 10px 15px;
    font-family: ${base.fontFamily.text};
    color: ${base.colors.textColor};
    font-size: 18px;
    resize: none;
    margin-bottom: 30px;

    @media(max-width: 560px){
        font-size: 16px;
    }

    @media(max-width: 480px){
        margin-bottom: 15px;
    }
`
const Button = styled.button`
    width: fit-content;
    background: ${base.colors.headlineColor};
    font-family: ${base.fontFamily.text};
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.72px;
    padding: 20px 20px 20px 35px;
    color: white;
    border-radius: 18px;
    display: flex;
    align-items: center;
    border: 0;
    cursor: pointer;
    transition: .3s ease-in-out;
    position: relative;
    overflow: hidden;

    &:before {
        content: '';
        width: 80px;
        height: 100%;
        background: rgba(255, 255, 255, 0.2);
        position: absolute;
        transition: .3s linear;
        left: 0;
        top: 0;
        transform: skew(-35deg) translateX(-100px);
    }

    &:hover:before {
        transform: skew(-35deg) translateX(400px);
    }

    &:hover {
        transform: scale(1.05);
    }

    @media(max-width: 768px) {
        padding: 15px 15px 15px 25px;
    }

    @media(max-width: 560px){
        font-size: 16px;
    }
`

const Arrow = styled.img`
    margin-left: 25px;
`

export default function FormFeedback(props) {

    return(
        <FormWrapper openForm={props.openForm} onSubmit={(e) => e.preventDefault()}>
            <Headline>Get In Touch</Headline>
            <CloseButtonCont onClick={props.closeForm}>
                <CloseButtonItem />
                <CloseButtonItem />
            </CloseButtonCont>
            <Input type='text' placeholder="Type your name here..." required/>
            <Input type='tel' placeholder="Type phone number here..." required/>
            <Input type='email' placeholder="Type email here..." required/>
            <Area placeholder="Type your text here..." required/>
            <Button onClick={props.sendForm}>
                Send Message
                <Arrow src={arrow} alt="arrow"/>
            </Button>
        </FormWrapper>
    )
}