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
`
const HeaderCont = styled(Container)`
    width: 100%;
    min-height: 830px;
    padding-top: 188px;
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