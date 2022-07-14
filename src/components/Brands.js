import styled from "styled-components";

import brand1 from '../images/svg/brand/brand1.svg'
import brand2 from '../images/svg/brand/brand2.svg'
import brand3 from '../images/svg/brand/brand3.svg'
import brand4 from '../images/svg/brand/brand4.svg'
import brand5 from '../images/svg/brand/brand5.svg'

import {Container} from './layout/common/Container'

const Wrapper = styled(Container)`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0px 50px;
    margin-bottom: 74px;

    @media(max-width: 1080px) {
        margin-bottom: 60px;
    }

    @media(max-width: 768px) {
        margin-bottom: 40px;
    }
`

const Img = styled.img`
    margin-bottom: 40px;
    padding: 0px 20px;
`

export default function Brands() {
    return(
        <Wrapper>
            <Img src={brand1} alt="modern home" />
            <Img src={brand2} alt="modern home" />
            <Img src={brand3} alt="modern home" />
            <Img src={brand4} alt="modern home" />
            <Img src={brand5} alt="modern home" />
        </Wrapper>
    )
}