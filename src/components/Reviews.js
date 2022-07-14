import styled from "styled-components"
import {Container} from './layout/common/Container'
import { base } from '../styles/base'
import Customer from "./layout/Customer"

import customer1 from '../images/customer/customer1.png'
import customer2 from '../images/customer/customer2.png'
import customer3 from '../images/customer/customer3.png'

const Section = styled(Container)`
    background: ${base.colors.lightbeige};
    border-radius: 70px;
    margin-bottom: 140px;
    padding: 110px 50px 120px;

    @media(max-width: 1080px) {
        padding: 60px 40px 60px;
        margin-bottom: 100px;
    }

    @media(max-width: 768px) {
        max-width: 100%;
        border-radius: 60px;

        &:last-child {
            margin-bottom: 0px;
        }

        margin-bottom: 60px;
    }

    @media(max-width: 540px) {
        padding: 40px 20px 40px;
    }
`

const HeadlineCont = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
`

const Headline = styled.h2`
    max-width: 479px;
    font-family: ${base.fontFamily.headline};
    color: ${base.colors.headlineColor};
    font-style: normal;
    font-weight: 400;
    font-size: 45px;
    line-height: 58px;
    letter-spacing: 0.22px;
    margin-bottom: 45px;

    @media(max-width: 1100px){
        font-size: 44px;
    }

    @media(max-width: 520px) {
        font-size: 38px;
        line-height: 55px;
    }

    @media(max-width: 520px) {
        font-size: 32px;
        line-height: 45px;
    }

    @media(max-width: 400px) {
        font-size: 28px;
    }
`
const Customers = styled.div`
    display: flex;
    justify-content: space-between;

    @media(max-width: 1180px) {
        flex-wrap: wrap;
    }
`

export default function Reviews() {
    return(
        <Section>
            <HeadlineCont>
                <Headline>
                    What the People Thinks
                    About Interno
                </Headline>
            </HeadlineCont>
            <Customers>
                <Customer 
                    src={customer1}
                    alt="Lisa Clairton"
                    name="Lisa Clairton"
                    city="New York, USA"
                    text="We selected Interno interior because of rigorous design background & education."
                />
                <Customer 
                    src={customer2}
                    alt="David Knight"
                    name="David Knight"
                    city="Sydney, Australia"
                    text="The team exceeded our expectations and emerged as leaders of our project’s."
                />
                <Customer 
                    src={customer3}
                    alt="Lisa Clairton"
                    name="Lisa Clairton"
                    city="Paris, France"
                    text="They balanced the architectural vision and the project realities beautifully."
                />
            </Customers>
        </Section>
    )
}