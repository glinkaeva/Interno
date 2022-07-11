import styled from "styled-components";
import { base } from '../../styles/base'
import { Text } from "../../styles/text";

import arrow from '../../images/svg/arrow.svg'

const Wrapper = styled.div`
    min-width: 410px;
    width: 49%;
    margin-bottom: 60px;
`

const Image = styled.img`
    width: 100%;
    height: 661px;
    margin-bottom: 25px;
    border-radius: 0px 80px 0px 0px;
`

const Headline = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 38px;
    letter-spacing: 0.22px;

    font-family: ${base.fontFamily.headline};
`

const TitleCont = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ArrowLink = styled.a`
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    background: ${base.colors.lightbeige};
`


export default function Project(props) {
    return(
        <Wrapper>
            <Image src={props.src} alt={props.alt} />
            <TitleCont>
                <div>
                    <Headline>{props.headline}</Headline>
                    <Text>{props.text}</Text>
                </div>
                <ArrowLink href={props.href}>
                    <img src={arrow} alt="arrow" />
                </ArrowLink>
            </TitleCont>
        </Wrapper>
    )    
}