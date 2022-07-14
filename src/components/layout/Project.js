import styled from "styled-components";
import { base } from '../../styles/base'
import { Text } from "../../styles/text";
import CircleArrow from "./common/CircleArrow";

const Wrapper = styled.div`
    min-width: 410px;
    width: 49%;
    margin-bottom: 60px;

    @media(max-width: 960px) {
        min-width: 360px;
    }

    @media(max-width: 860px) {
        min-width: 240px;
    }

    @media(max-width: 768px) {
        min-width: 220px;
        margin-bottom: 40px;
    }

    @media(max-width: 660px) {
        min-width: 100%;
    }
`

const Image = styled.div`
    width: 100%;
    height: 661px;
    margin-bottom: 25px;
    border-radius: 0px 80px 0px 0px;

    background: url(${(props)=>props.src});
    background-size: cover;
    background-position: center;

    @media(max-width: 1140px) {
        height: 580px;
    }

    @media(max-width: 960px) {
        height: 480px;
    }

    @media(max-width: 860px) {
        height: 400px;
    }

    @media(max-width: 768px) {
        height: 300px;
    }
`

const Headline = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 38px;
    letter-spacing: 0.22px;

    font-family: ${base.fontFamily.headline};
    color: ${base.colors.headlineColor};

    @media(max-width: 960px) {
        font-size: 22px;
        line-height: 32px;
    }
    @media(max-width: 860px) {
        font-size: 20px;
        line-height: 28px;
    }
    @media(max-width: 768px) {
        font-size: 18px;
    }
    @media(max-width: 660px) {
        font-size: 22px;
        line-height: 32px;
    }
    @media(max-width: 420px) {
        font-size: 19px;
        line-height: 28px;
    }
`

const TitleCont = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
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
                <CircleArrow href={props.href} />
            </TitleCont>
        </Wrapper>
    )    
}