import styled from "styled-components";
import { base } from "../styles/base";
import { Container } from './layout/common/Container'
import Button from "./layout/common/Button";
import { Text } from "../styles/text";
import arrow from '../images/svg/long-arrow-black.svg'

const JoinCont = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 40px;
    background: ${base.colors.headlineColor};
    border-radius: 70px;
    margin-bottom: 80px;

    @media(max-width: 768px) {
        margin-bottom: 40px;
    }
`

const Headline = styled.h2`
    font-family: ${base.fontFamily.headline};
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 75px;
    text-align: center;
    letter-spacing: 0.22px;
    color: #FFFFFF;

    margin-bottom: 10px;

    @media(max-width: 1100px){
        font-size: 44px;
    }

    @media(max-width: 520px) {
        font-size: 38px;
        line-height: 55px;
    }

    @media(max-width: 520px) {
        font-size: 32px;
        line-height: 45px;
    }
`

const JoinText = styled(Text)`
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 30px;
`

export default function Join() {
    return(
        <JoinCont id="contact">
            <Headline>Wanna join the interno?</Headline>
            <JoinText>Contact Us & Get a Free Consultation</JoinText>
            <Button bg={base.colors.beige} btnText="Connect With us" arrow={arrow}/>
        </JoinCont>
    )
}