import styled from "styled-components"
import headerBg from '../images/header-bg.png'
import { Text } from "../styles/text"
import { Container } from './layout/common/Container'
import { base } from '../styles/base'
import Button from "./layout/common/Button"
import arrow from '../images/svg/long-arrow.svg'

const HeaderImage = styled.div`
    width: 100%;
    min-height: 830px;
    border-radius: 0px 0px 0px 290px;

    background: url(${headerBg});
    background-size: cover;

    @media(max-width: 960px) {
        background-position: center left;
    }

    @media(max-width: 860px) {
        min-height: 0px;
        height: 730px;
        padding-top: 100px;
        border-radius: 0px 0px 0px 150px;
    }

    @media(max-width: 768px) { 
        border-radius: 0px 0px 0px 120px; 
        height: 680px;
        padding-top: 80px;
    }
    @media(max-width: 580px) { 
        border-radius: 0px 0px 0px 100px; 
        height: 580px;
        padding-top: 60px;
    }
    @media(max-width: 480px) { 
        border-radius: 0px 0px 0px 80px; 
        height: 500px;
        padding-top: 20px;
    }
`
const HeaderCont = styled(Container)`
    min-height: 830px;
    padding-top: 188px;

    @media(max-width: 860px) {
        min-height: 730px;
        padding-top: 100px;
    }
`

const Content = styled.div`
    max-width: 600px;
`

const Headline = styled.h1`
    font-style: normal;     
    font-weight: 400;
    font-size: 80px;
    line-height: 96px;
    letter-spacing: 0.22px;
    font-family: ${base.fontFamily.headline};
    color: ${base.colors.headlineColor};
    margin-bottom: 20px;

    @media(max-width: 1140px) {
        font-size: 72px;
        line-height: 76px;
    }

    @media(max-width: 690px) {
        font-size: 64px;
        line-height: 76px;
    }

    @media(max-width: 580px) {
        font-size: 54px;
        line-height: 66px;
    }

    @media(max-width: 480px) {
        font-size: 36px;
        line-height: 40px;
    }
`

const HeaderText = styled(Text)`
    margin-bottom: 35px;
`

export default function Header() {
    return(
        <HeaderImage>
            <HeaderCont>
                <Content>
                    <Headline>
                        Let's Create Your 
                        Dream Interior
                    </Headline>
                    <HeaderText>
                        The world needs innovators and problem solvers who turn
                        challenges into greater opportunities.
                    </HeaderText>
                    <Button btnText="Get Started" arrow={arrow}/>
                </Content>
            </HeaderCont>
        </HeaderImage>
    )
}