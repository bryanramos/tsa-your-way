import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PrimaryButton } from './Common';

interface EventPreviewProps {
    competitiveEvent: any;
}

const PreviewCard = styled.div`
    box-shadow: 5px 5px 10px rgba(0, 0 , 0, .1);
    background: #272B33;
    color: #d4d5de;
    padding: 30px 20px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
`;

const Body = styled.div`
    flex-grow: 1;
`;

const Footer = styled.div``;

const CardHeading = styled.h5`
    margin: .5rem 0;
`;

const EventAttributes = styled.ul`
    padding: 0;
    margin-bottom: 1.5rem;
    li {
        margin-bottom: 5px;
        display: flex;
        align-items: center;
    }
    li:last-of-type {
        margin-bottom: 0px;
    }
    li svg {
        margin-right: 8px;
    }
`;

export default class EventPreview extends React.Component<EventPreviewProps, any> {

    printChallengeType(type: string) {
        if (type == 'challenge-a') return 'Challenge A';
        else if (type == 'challenge-b') return 'Challenge B';
    }

    render() {
        return (
            <PreviewCard>
                <Body>
                    {this.printChallengeType(this.props.competitiveEvent.challenge)} 
                    <CardHeading>{this.props.competitiveEvent.name}</CardHeading>
                    <EventAttributes>
                        { this.props.competitiveEvent.highschool ? <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg><span>High School</span></li> : '' }
                        { this.props.competitiveEvent.middleschool ? <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg><span>Middle School</span></li> : '' }
                        { this.props.competitiveEvent.individual ? 
                            <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg><span>Individual</span></li> : '' }
                        { this.props.competitiveEvent.team ? <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg><span>Team</span></li> : '' }
                    </EventAttributes>
                </Body>
                <Footer>
                    <PrimaryButton to={`/event/${this.props.competitiveEvent.id}`}>
                        Event Info
                    </PrimaryButton>
                </Footer>
            </PreviewCard>
        );
    }
}