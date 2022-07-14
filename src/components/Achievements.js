import styled from "styled-components";
import { base } from "../styles/base";
import { Container } from './layout/common/Container'
import Experience from "./layout/Experience";

const Section = styled.section`
    padding: 140px 0;
    background: ${base.colors.lightbeige};
    margin-bottom: 137px;

    @media(max-width: 1080px) {
        padding: 100px 0;
        margin-bottom: 80px;
    }

    @media(max-width: 768px) {
        padding: 80px 0;
        margin-bottom: 60px;
    }

    @media(max-width: 580px) {
        padding: 40px 0;
        margin-bottom: 40px;
    }
`
const AchievementsContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 1040px) {
        flex-wrap: wrap;

        & div:last-child {
            border: 0;
        }
    }

    @media(max-width: 960px) {
        
        & div{
            border: 0 !important;
        }
    }
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