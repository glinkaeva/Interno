import styled from "styled-components";
import { base } from './base'

export const Text = styled.p`
    font-family: ${base.fontFamily.text};
    color: ${base.colors.textColor};
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 0.22px;

    @media(max-width: 1140px) {
        font-size: 20px;
    }

    @media(max-width: 768px) {
        font-size: 18px;
    }
`