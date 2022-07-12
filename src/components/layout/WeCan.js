import styled from "styled-components"
import arrow from '../../images/svg/long-arrow.svg'
import { base } from '../../styles/base'
import { Text } from "../../styles/text"

const Box = styled.div`
/* //Todo: мб переделать (адаптив) */
    width: 400px;
    min-height: 395px;
    padding: 75px 46px 0 47px;
    display: flex;
    flex-direction: column;
    align-items: center;
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