import styled from "styled-components"
import {Container} from './layout/common/Container'
import WeCan from "./layout/WeCan"

const Section = styled.section`
    margin: 100px 0;
`

const WhatWeCanCont = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`

export default function WhatWeCan() {
    return(
        <Section>
            <WhatWeCanCont>
                <WeCan 
                    headline="Interior Design"
                    text="Enhancing the interior to achieve a healthier environment for the people using right space."
                    href="#"
                />
                <WeCan 
                    headline="Furniture"
                    text="Movable articles that are used to make a room or building suitable for living or working."
                    href="#"
                />
                <WeCan 
                    headline="Flooring"
                    text="Thin object any finished material applied over a floor structure to provide a walking surface."
                    href="#"
                />
            </WhatWeCanCont>
        </Section>
    )
}