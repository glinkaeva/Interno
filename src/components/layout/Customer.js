import styled from "styled-components";
import { base } from "../../styles/base";
import { Text } from "../../styles/text";

const Wrapper = styled.div`
    width: 354px;
    padding: 50px 35px 45px;
    background: white;
    border-radius: 30px;
`

const PersonalityCont = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 28px;
`

const Image = styled.img`
    width: 77px;
    height: 77px;
    border-radius: 100%;
`

const PersonalInformation = styled.div`
    margin-left: 20px;
`

const Name = styled.p`
    font-family: ${base.fontFamily.headline};
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 38px;
    letter-spacing: 0.22px;
    color: ${base.colors.headlineColor};
`

const City = styled.p`
    font-family: ${base.fontFamily.text};
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.22px;
`

const CustomerText = styled(Text)`
    font-size: 20px;
    line-height: 30px;
`

export default function Customer(props) {
    return(
        <Wrapper>
            <PersonalityCont>
                <Image src={props.src} alt={props.alt} />
                <PersonalInformation>
                    <Name>{props.name}</Name>
                    <City>{props.city}</City>
                </PersonalInformation>
            </PersonalityCont>
            <CustomerText>{props.text}</CustomerText>
        </Wrapper>
    )
}