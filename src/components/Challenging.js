import styled from "styled-components"
import {Container} from './layout/common/Container'
import { base } from '../styles/base'
import { Text } from "../styles/text"
import Button from "./layout/common/Button"
import phone from '../images/svg/phone.svg'
import kitchen from '../images/challenging.jpg'
import arrow from '../images/svg/long-arrow.svg'

const ChallengignCont = styled(Container)`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 140px;

    @media(max-width: 1080px) {
        margin-bottom: 100px;
    }

    @media(max-width: 768px) {
        margin-bottom: 60px;
    }
`

const Content = styled.div`
    width: 100%;
    max-width: 515px;

    @media(max-width: 1100px){
        max-width: 46%;
    }

    @media(max-width: 960px){
        max-width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: flex-start;
    }

    @media(max-width: 768px){
        display: block;
    }
`

const Headline = styled.h2`
    font-family: ${base.fontFamily.headline};
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 65px;
    letter-spacing: 0.22px;
    margin-bottom: 48px;
    color: ${base.colors.headlineColor};

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

const ChallengigText = styled(Text)`
    margin-bottom: 40px;
`

const PhoneWrapper = styled.div`
    display: flex;
    /* align-items: center; */
    margin-bottom: 50px;
`

const Link = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 93px;
    height: 93px;
    border-radius: 100%;
    background: ${base.colors.lightbeige};
`

const PhoneImage = styled.img`
    width: 32px;
    height: 32px;
`

const PhoneTextCont = styled.div`
    margin-left: 20px;
    padding-top: 9px;
`

const PhoneText = styled(Text)`
    font-size: 24px;
`

const Image = styled.div`
    width: 49%;
    height: 635px;
    border-radius: 0px 326px 0px 123px;
    background: url(${kitchen});
    background-size: cover;

    @media(max-width: 1140px){
        height: 580px;
    }

    @media(max-width: 960px){
        width: 100%;
        height: 580px;
        margin-bottom: 60px;
        border-radius: 0px 256px 0px 83px;
        order: -1;
        background-position: center;
    }

    @media(max-width: 768px){
        height: 450px;
        border-radius: 0px 156px 0px 63px;
    }

    @media(max-width: 520px) {
        height: 350px;
        border-radius: 0px 100px 0px 33px;
    }

`

export default function Challengign() {
    return(
        <ChallengignCont id="about">
            <Content>
                <Headline>
                    We Tackle The Most Challenging Designs
                </Headline>
                <ChallengigText>
                    The world needs innovators and problem solvers who turn challenges into greater opportunities. We have
                    an insatiable curiosity about transformative trends challenging the status.
                </ChallengigText>
                <PhoneWrapper>
                    <Link href="tel: 012345678">
                        <PhoneImage src={phone} alt="phone" />
                    </Link>
                    <PhoneTextCont>
                        <PhoneText>012345678</PhoneText>
                        <Text>Call Us Anytime</Text>
                    </PhoneTextCont>
                </PhoneWrapper>
                <Button btnText="Get Free Estimate" arrow={arrow} />
            </Content>
            <Image/>
        </ChallengignCont>
    )
}