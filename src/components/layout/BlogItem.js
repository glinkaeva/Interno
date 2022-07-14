import styled from "styled-components";
import { base } from "../../styles/base";
import { Text } from "../../styles/text";
import CircleArrow from "./common/CircleArrow";

const Box = styled.div`
    max-width: 387px;
    padding: 20px;
    border: 1px solid ${base.colors.lightbeige};
    border-radius: 62px;
    margin-bottom: 40px;

    @media(max-width: 1280px) {
        padding: 20px 20px 0 20px;
        max-width: 350px;
    }

    @media(max-width: 1140px) {
        max-width: 48%;
    }

    @media(max-width: 660px) {
        width: 100%;
        max-width: 100%;
    }
`

const Image = styled.div`
    width: 100%;
    min-height: 290px;
    border-radius: 45px 45px 0px 0px;
    background: url(${(props)=>props.imgURL});
    background-size: cover;

    padding: 29px 24px;

    display: flex;
    align-items: flex-end;
    margin-top: 10px;
    margin-bottom: 15px;

    @media(max-width: 768px) {
        min-height: 240px;
    }
`

const BlogText = styled(Text)`
    font-size: 16px;
    line-height: 24px;
`

const Headline = styled.p`
    font-family: ${base.fontFamily.headline};
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 35px;
    letter-spacing: 0.5px;
    color: ${base.colors.headlineColor};
    margin-bottom: 20px;

    @media(max-width: 1280px) {
        font-size: 22px;
        line-height: 28px;
    }

    @media(max-width: 1280px) {
        font-size: 20px;
        line-height: 26px;
    }

    @media(max-width: 768px) {
        font-size: 18px;
        line-height: 24px;
    }
`

const WhiteBlock = styled.div`
    background: #FFFFFF;
    border-radius: 8px 8px 8px 0px;
    padding: 10px;
    text-align: center;
`

const ReadMoreCont = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`

export default function BlogItem(props) {
    return(
        <Box>
            <Image imgURL={props.url}>
                <WhiteBlock>
                    <BlogText>{props.place}</BlogText>
                </WhiteBlock>
            </Image>    
            <Headline>{props.title}</Headline>
            <ReadMoreCont>
                <BlogText>{props.data}</BlogText>
                <CircleArrow href={props.href} width="52px" height="52px" />
            </ReadMoreCont>
        </Box>
    )
}