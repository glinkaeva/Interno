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
    padding: 103px 50px 120px;
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
`
const Customers = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
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