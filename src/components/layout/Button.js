import styled from "styled-components";
import { base } from '../../styles/base'
import arrow from '../../images/svg/long-arrow.svg'

const Btn = styled.button`
    background: ${base.colors.black};
    font-family: ${base.fontFamily.text};
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.72px;
    padding: 20px 20px 20px 35px;
    color: white;
    border-radius: 18px;
    display: flex;
    align-items: center;

    border: 0;

    cursor: pointer;
`

const Arrow = styled.img`
    margin-left: 25px;
`

export default function Button(props) {
    return(
        <Btn>
            {props.btnText}
            <Arrow src={arrow} alt="arrow"/>
        </Btn>
    )
}