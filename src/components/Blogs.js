import styled from "styled-components";
import { base } from "../styles/base";
import { Container } from "./layout/common/Container";
import { Text } from "../styles/text";

import BlogItem from "./layout/BlogItem";

import blogImage1 from '../images/blog/blog1.png'
import blogImage2 from '../images/blog/blog2.png'
import blogImage3 from '../images/blog/blog3.png'
import blogImage4 from '../images/blog/blog4.png'
import blogImage5 from '../images/blog/blog5.png'
import blogImage6 from '../images/blog/blog6.png'

const blogsData = [
    {id: 1, img: blogImage1, place: 'Kitchen Design', title: 'Residential Interior Designer In New York, USA', data: 'November 23, 2022', href: '#'},
    {id: 2, img: blogImage2, place: 'Living Room', title: 'How To Choose The Best Wall Art & Decor House?', data: 'November 22, 2022', href: '#'},
    {id: 3, img: blogImage3, place: 'Minimalist Interior', title: 'Tips To Increase The Interior Value Of Your House', data: 'November 21, 2022', href: '#'},
    {id: 4, img: blogImage4, place: 'Kitchen Design', title: 'Best Solution For Any Office & Business Interior', data: 'November 18, 2022', href: '#'},
    {id: 5, img: blogImage5, place: 'Living Room', title: 'Get Solution For Building Construction Work', data: 'November 17, 2022', href: ''},
    {id: 6, img: blogImage6, place: 'Minimalist Interior', title: 'Attain The Best Finish For The Kitchen Cabinets', data: 'November 16, 2022', href: '#'},
]

const BlogsContainer = styled(Container)`
    margin-bottom: 100px;

    @media(max-width: 1080px) {
        margin-bottom: 80px;
    }

    @media(max-width: 768px) {
        margin-bottom: 40px;
    }
`

const TextCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 66px;

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

const BlogsText = styled(Text)`
    max-width: 590px;
    text-align: center;
`

const BlogItemCont = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`


export default function Blogs() {
    return(
        <BlogsContainer id="blog">
            <TextCont>
                <Headline>Recent Blogs</Headline>
                <BlogsText>Get updates about our latest trends and techniques used in interior design project works.</BlogsText>
            </TextCont>
            <BlogItemCont>
                {
                    blogsData.map(({id, img, place, title, data, href}) => 
                        <BlogItem 
                            key={id}
                            url={img}
                            place={place}
                            title={title}
                            data={data}
                            href={href}
                        />
                    )
                }
            </BlogItemCont>
        </BlogsContainer>
    )
}