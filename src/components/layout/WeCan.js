import styled from "styled-components"
import arrow from '../../images/svg/long-arrow.svg'
import { base } from '../../styles/base'
import { Text } from "../../styles/text"

const Box = styled.div`
    min-width: 320px;
    width: 100%;
    max-width: 400px;
    min-height: 395px;
    padding: 75px 46px 0 47px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(max-width: 1280px) {
        max-width: 370px;
        padding: 55px 26px 0 27px;
    }

    @media(max-width: 1190px) {
        max-width: 50%;
    }

    @media(max-width: 860px) {
        max-width: 100%;
        min-height: 320px;
    }
`

const Headline = styled.p`
    font-family: ${base.fontFamily.headline};
    color: ${base.colors.headlineColor};
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 39px;
    text-align: center;
    letter-spacing: 0.22px;
    margin-bottom: 20px;
`

const WeCanText = styled(Text)`
    text-align: center;
    margin-bottom: 36px;
`

const Link = styled.a`
    font-family: ${base.fontFamily.text};
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    letter-spacing: 0.36px;
    display: flex;
`

const Arrow = styled.img`
    margin-left: 10px;
`

export default function WeCan(props) {
    return(
        <Box>
            <Headline>{props.headline}</Headline>
            <WeCanText>{props.text}</WeCanText>
            <Link href={props.href}>
                View More 
                <Arrow src={arrow} alt="arrow"/>
            </Link>
        </Box>
    )
}