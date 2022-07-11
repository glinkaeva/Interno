import styled from "styled-components";
import { base } from '../styles/base'
import { Text } from "../styles/text";
import {Container} from './layout/Container'
import Project from "./layout/Project";

import project1 from '../images/project/project1.png'
import project2 from '../images/project/project2.png'
import project3 from '../images/project/project3.png'
import project4 from '../images/project/project4.png'

const ProjectContainer = styled(Container)`
    margin-bottom: 80px;
`

const TextCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 70px;
`

const Headline = styled.h2`
    font-family: ${base.fontFamily.headline};
    font-style: normal;
    font-weight: 400;
    font-size: 47px;
    line-height: 62px;
    text-align: center;
    letter-spacing: 0.22px;

    margin-bottom: 20px;
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
        <ProjectContainer>
            <TextCont>
                <Headline>Recent Projects</Headline>
                <ProjectText>
                    With tools to make every part of your process more human and a support team
                    excited to help you, getting started with us never been easier.
                </ProjectText>
            </TextCont>
            <Box>
                <Project 
                    src={project1}
                    alt="Winery Dry Creek Building"
                    headline="Winery Dry Creek Building"
                    text="Art Modern"
                    href="#"
                />
                <Project 
                    src={project2}
                    alt="Creative Workplace Design"
                    headline="Creative Workplace Design"
                    text="Minimalist"
                    href="#"
                />
                <Project 
                    src={project3}
                    alt="Bedroom Interior Pot Work"
                    headline="Bedroom Interior Pot Work"
                    text="Modern"
                    href="#"
                />
                <Project 
                    src={project4}
                    alt="Light Ambience Sepia Design"
                    headline="Light Ambience Sepia Design"
                    text="Scandinavian"
                    href="#"
                />
            </Box>
        </ProjectContainer>
        
    )
}

/*

<Project 
    src={project1}
    alt="Winery Dry Creek Building"
    headline="Winery Dry Creek Building"
    text="Art Modern"
    href="#"
/>

*/