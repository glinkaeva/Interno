import styled from "styled-components";
import { base } from "../../styles/base";
import { Text } from "../../styles/text";
import CircleArrow from "./common/CircleArrow";

const Box = styled.div`
    max-width: 387px;
    padding: 21px;
    border: 1px solid ${base.colors.lightbeige};
    border-radius: 62px;
    margin-bottom: 40px;
`

const Image = styled.div`
    width: 100%;
    min-height: 300px;
    border-radius: 45px 45px 0px 0px;
    background: url(${(props)=>props.imgURL});
    background-size: cover;

    padding: 25px 30px;

    display: flex;
    align-items: flex-end;
    margin-bottom: 15px;
`

const BlogText = styled(Text)`
    font-size: 16px;
    line-height: 24px;
`

const Headline = styled.p`
    font-weight: 700;
    font-size: 25px;
    line-height: 35px;
    letter-spacing: 0.5px;
    color: ${base.colors.headlineColor};
    margin-bottom: 20px;
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
    margin-bottom: 34px;
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
                <CircleArrow href={props.href} />
            </ReadMoreCont>
        </Box>
    )
}