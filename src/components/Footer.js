import styled from "styled-components";
import { Container } from "./layout/common/Container";
import { Text } from "../styles/text";
import { base } from "../styles/base";
import logo from '../images/svg/logo.svg'

import fb from '../images/svg/social/fb.svg'
import twitter from '../images/svg/social/twitter.svg'
import LinkedIn from '../images/svg/social/in.svg'
import inst from '../images/svg/social/inst.svg'

const FooterCont = styled(Container)`
    padding-top: 50px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 80px;
`

const FooterBottom = styled.div`
    padding: 35px 0;
    border-top: 1px solid ${base.colors.lightbeige};
    text-align: center;
`

const Headline = styled.p`
    font-family: ${base.fontFamily.headline};
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 38px;
    letter-spacing: 0.22px;
    color: ${base.colors.headlineColor};
    margin-bottom: 20px;
`

const FooterText = styled(Text)`
    margin-bottom: 30px;
`

const Link = styled.a`
    display: block;
    font-family: ${base.fontFamily.text};
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 0.22px;
    margin-bottom: 30px;

    transition: .5s;

    &:hover {
        color: ${base.colors.beige};
    }
`

const SocialBox = styled.div`
    display: flex;
`

const SocialItem = styled.img`
    margin-right: 40px;
`

const Span = styled.span`
    color: ${base.colors.beige};
`

export default function Footer() {
    return(
        <>
            <FooterCont>
                <div style={{width: 390}}>
                    <img src={logo} alt="" style={{marginBottom: 25}} />
                    <FooterText>
                        We are the leading architect and interior design firm in the world.
                    </FooterText>
                    <SocialBox>
                        <a href="/"><SocialItem src={fb} alt="Facebook"/></a>
                        <a href="/"><SocialItem src={twitter} alt="Twitter"/></a>
                        <a href="/"><SocialItem src={LinkedIn} alt="LinkedIn"/></a>
                        <a href="/"><SocialItem src={inst} alt="Instagram"/></a>
                    </SocialBox>
                </div>
                <div>
                    <Headline>Pages</Headline>
                    <Link href="#">Style Guide</Link>
                    <Link href="#">Protected</Link>
                    <Link href="#">Licenses</Link>
                    <Link href="#">Changelog</Link>
                    <Link href="#">404</Link>
                </div>
                <div>
                    <Headline>Explore</Headline>
                    <Link href="#">About Us</Link>
                    <Link href="#">Recent Blog</Link>
                    <Link href="#">Pricing Plan</Link>
                    <Link href="#">Our Projects</Link>
                    <Link href="#">Contact Us</Link>
                </div>
                <div style={{width: 300}}>
                    <Headline>Contact</Headline>
                    <Link href="http://surl.li/ckkqq" target="_blank">53, East Birchwood Ave. Brooklyn, New York 11201, USA.</Link>
                    <Link href="contact@interno.com">contact@interno.com</Link>
                    <Link href="tel: 1234567890">(123) 456 - 7890</Link>
                </div>
            </FooterCont>
            <FooterBottom>
                <Text>
                    Copyright © Interno | Designed by <Span>Sunrise</Span> Templates - Powered by <Span>Figma</Span>
                </Text>
            </FooterBottom>
        </>
    )
}