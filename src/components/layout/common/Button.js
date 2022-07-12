import styled from "styled-components";
import { base } from '../../../styles/base'

const Btn = styled.button`
    background: ${base.colors.headlineColor};
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
    transition: .3s ease-in-out;
    position: relative;
    overflow: hidden;

    &:before {
        content: '';
        width: 80px;
        height: 100%;
        background: rgba(255, 255, 255, 0.2);
        position: absolute;
        transition: .3s linear;
        left: 0;
        top: 0;
        transform: skew(-35deg) translateX(-100px);
    }

    &:hover:before {
        transform: skew(-35deg) translateX(400px);
    }

    &:hover {
        transform: scale(1.05);
    }
`

const Arrow = styled.img`
    margin-left: 25px;
`

export default function Button(props) {
    return(
        <Btn style={{background: props.bg}}>
            {props.btnText}
            <Arrow src={props.arrow} alt="arrow"/>
        </Btn>
    )
}