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

    &:hover {
        background: ${base.colors.beige};
    }
`
export default function CircleArrow(props) {
    return(
        <ArrowLink href={props.href} style={{width: props.width, height: props.height}}>
            <img src={arrow} alt="arrow" />
        </ArrowLink>
    ) 
}
