import styled from "styled-components";
import { base } from "../styles/base";
import { Container } from './layout/Container'
import Experience from "./layout/Experience";

const Section = styled.section`
    padding: 140px 0;
    background: ${base.colors.lightbeige};
`
const AchievementsContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function Achievements() {
    return(
        <Section>
            <AchievementsContainer>
                <Experience 
                    headline="12"
                    text="Years Of Experiance"
                />
                <Experience 
                    headline="5K"
                    text="Success Project"
                />
                <Experience 
                    headline="1K"
                    text="Active Project"
                />
                <Experience 
                    headline="4K"
                    text="Happy Customers"
                />
            </AchievementsContainer>
        </Section>
    )
}