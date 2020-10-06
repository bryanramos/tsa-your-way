import React from 'react';
import { Bounds } from './Common';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
    margin: 40px 0;
`;

const Badge = styled.span`
    background: var(--tsa-brand-red);
    padding: 5px 10px;
    font-size: 0.8rem;
    border-radius: 4px;
    display: inline-block;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 0.5rem;
`;

export default class Footer extends React.Component {
    render() {
        return (
            <FooterWrapper>
                <Bounds>
                    <div>
                    <Badge>
                        TSA Confidential
                    </Badge>
                    </div>
                    <p>
                        Copyright &copy; 2020 - Texas Technology Student Association. All Rights Reserved. Information provided by Texas TSA staff and community contributors. Posting or sharing content found on this platform externally without proper permission from Texas TSA staff is prohibited.
                    </p>
                </Bounds>
            </FooterWrapper>
        );
    }
}