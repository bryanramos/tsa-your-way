import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Bounds = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 24px;
`;

export const PageHeading = styled.h2`
    margin-bottom: 2rem;
`;

export const PrimaryButton = styled(Link)`
    background: var(--tsa-brand-blue);
    box-shadow: 5px 5px 10px rgba(0, 0 , 0, .1);
    color: #fff;
    border-radius: 4px;
    display: inline-flex;
    padding: 10px 15px;
    :hover {
        color: rgba(255, 255, 255, .6);
        text-decoration: none;
    }
`;

export const ContactButton = styled.a`
    background: var(--tsa-brand-blue);
    box-shadow: 5px 5px 10px rgba(0, 0 , 0, .1);
    color: #fff;
    border-radius: 4px;
    display: inline-flex;
    padding: 10px 15px;
    :hover {
        color: rgba(255, 255, 255, .6);
        text-decoration: none;
    }
`;

export const Button = styled.button`
    background: var(--tsa-brand-blue);
    box-shadow: 5px 5px 10px rgba(0, 0 , 0, .1);
    color: #fff;
    border-radius: 4px;
    display: inline-flex;
    padding: 10px 15px;
    border: none;
    line-height: normal;
    :hover {
        color: rgba(255, 255, 255, .6);
        text-decoration: none;
    }
`;