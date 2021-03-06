import styled from "styled-components";
import { base } from '../styles/base'
import { Text } from "../styles/text";
import {Container} from './layout/common/Container'
import Project from "./layout/Project";

import project1 from '../images/project/project1.png'
import project2 from '../images/project/project2.png'
import project3 from '../images/project/project3.png'
import project4 from '../images/project/project4.png'

const projectData = [
    {id: 1, src: project1, headline: 'Winery Dry Creek Building', text: 'Art Modern', href: '#'},
    {id: 2, src: project2, headline: 'Creative Workplace Design', text: 'Minimalist', href: '#'},
    {id: 3, src: project3, headline: 'Bedroom Interior Pot Work', text: 'Modern', href: '#'},
    {id: 4, src: project4, headline: 'Light Ambience Sepia Design', text: 'Scandinavian', href: '#'},
]

const ProjectContainer = styled(Container)`
    margin-bottom: 80px;

    @media(max-width: 768px) {
        margin-bottom: 20px;
    }
`

const TextCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 70px;

    @media(max-width: 768px) {
        margin-bottom: 40px;
    }
`

const Headline = styled.h2`
    font-family: ${base.fontFamily.headline};
    color: ${base.colors.headlineColor};
    font-style: normal;
    font-weight: 400;
    font-size: 47px;
    line-height: 62px;
    text-align: center;
    letter-spacing: 0.22px;

    margin-bottom: 20px;

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
`

const ProjectText = styled(Text)`
    max-width: 768px;
    text-align: center;
`

const Box = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export default function RecentProject() {
    return(
        <ProjectContainer id="projects">
            <TextCont>
                <Headline>Recent Projects</Headline>
                <ProjectText>
                    With tools to make every part of your process more human and a support team
                    excited to help you, getting started with us never been easier.
                </ProjectText>
            </TextCont>
            <Box>
                {
                    projectData.map(({id, src, headline, text, href}) => 
                        <Project 
                            key={id}
                            src={src}
                            headline={headline}
                            text={text}
                            href={href}
                            alt={headline}
                        />
                    )
                }
            </Box>
        </ProjectContainer>
        
    )
}