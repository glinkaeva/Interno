import styled from "styled-components";
import { base } from "../../styles/base";
import { Text } from "../../styles/text";

const Box = styled.div`
    width: 288px;
    padding: 15px 40px;
    
    &+& {
        border-left: 1px solid ${base.colors.beige};
    }
`

const Headline = styled.p`
    text-transform: uppercase;
    font-family: ${base.fontFamily.headline};
    font-style: normal;
    font-weight: 400;
    font-size: 85px;
    line-height: 128px;
    text-align: center;
    letter-spacing: 1.7px;
    color: ${base.colors.beige};

    margin-bottom: 10px;
`

const ExText = styled(Text)`
    text-align: center;
`

export default function Experience(props) {
    return(
        <Box>
            <Headline>
                {props.headline}
            </Headline>
            <ExText>
                {props.text}
            </ExText>
        </Box>
    )
}