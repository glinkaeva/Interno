import styled from "styled-components";
import { base } from '../../../styles/base'
import arrow from '../../../images/svg/arrow.svg'

const ArrowLink = styled.a`
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    background: ${base.colors.lightbeige};
    transition: .5s ease-in-out;
    margin-left: 20px;

    &:hover {
        background: ${base.colors.beige};
    }

    @media(max-width: 1140px) {
        width: 60px;
        height: 60px;
    }

    @media(max-width: 960px) {
        width: 55px;
        height: 55px;
    }

    @media(max-width: 860px) {
        width: 50px;
        height: 50px;
    }
`

const Img = styled.img`
    @media(max-width: 960px) {
        width: 7px;
    }
    @media(max-width: 860px) {
        width: 6px;
    }
    @media(max-width: 540px) {
        width: 7px;
    }
`

export default function CircleArrow(props) {
    return(
        <ArrowLink href={props.href} style={{width: props.width, height: props.height}}>
            <Img src={arrow} alt="arrow" />
        </ArrowLink>
    ) 
}
