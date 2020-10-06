import * as React from 'react';
import { Button, ContactButton, PrimaryButton } from '../components/Common';
import { Loading } from '../components/Loading';
import styled from 'styled-components';
import ParsedInfo from '../components/ParsedInfo';
import { Alert } from '../components/Alert';

interface EventState {
    isFound?: boolean;
    id?: string;
    objectID?: string;
    name?: string;
    description?: string;
    type?: string;
    challenge?: string;
    middleschool?: boolean;
    highschool?: boolean;
    individual?: boolean;
    team?: boolean;
    submittableUri?: string;
    contact?: string;
    overview?: string;
    details?: string;
    rules?: string;
    stemIntegration?: string;
    relatedCareers?: string;
    rubric?: string;
    attachments?: string;
    showAlert?: boolean;
    alert?: string;
    active?: boolean;
    archive?: boolean;
    isLoaded: boolean;
}

const EventProfileGrid = styled.div`
    padding: 20px 0;
    -webkit-box-align: stretch;
    box-align: stretch;
    -webkit-align-items: stretch;
    align-items: stretch;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-left: -12px;
    padding-top: 0;
    width: -webkit-calc(100% + 24px);
    width: calc(100% + 24px);
`;

const EventProfileAside = styled.div`
    -webkit-flex-basis: 100%;
    flex-basis: 100%;
    -webkit-box-flex: 1;
    box-flex: 1;
    -webkit-flex-grow: 1;
    flex-grow: 1;
    -webkit-flex-shrink: 1;
    flex-shrink: 1;
    margin-left: 12px;
    margin-right: 12px;
    margin-top: 24px;
    min-width: 0;
    @media (min-width: 743px) {
        -webkit-flex-basis: 25%;
        flex-basis: 25%;
    }
`;

const EventProfile = styled.div`
    box-shadow: 5px 5px 10px rgba(0, 0 , 0, .1);
    background: #272B33;
    color: #d4d5de;
    padding: 3rem;
    border-radius: 6px;
    position: sticky;
    top: 20px;
`;

const Attributes = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: block;
    margin-bottom: 20px;
`;

const EventMainParent = styled.div`
    -webkit-flex-basis: 100%;
    flex-basis: 100%;
    -webkit-box-flex: 1;
    box-flex: 1;
    -webkit-flex-grow: 1;
    flex-grow: 1;
    -webkit-flex-shrink: 1;
    flex-shrink: 1;
    margin-left: 12px;
    margin-right: 12px;
    margin-top: 24px;
    min-width: 0;
    @media (min-width: 743px) {
        -webkit-flex-basis: 70%;
        flex-basis: 70%;
    }
`;

const EventMain = styled.div`
    box-shadow: 5px 5px 10px rgba(0, 0 , 0, .1);
    background: #272B33;
    color: #d4d5de;
    padding: 3rem;
    border-radius: 6px;
`;

const ActionsOnEvent = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
`;

export class Event extends React.Component<any, EventState> {
    constructor(props: any) {
        super(props);
        
        this.state = {
            isFound: true,
            id: '',
            objectID: '',
            name: '',
            description: '',
            type: 'nqe-skill-development',
            challenge: 'challenge-a',
            middleschool: false,
            highschool: false,
            individual: false,
            team: false,
            submittableUri: '',
            contact: 'nqe@texastsa.org',
            overview: '',
            details: '',
            rules: '',
            stemIntegration: '',
            relatedCareers: '',
            rubric: '',
            attachments: '',
            showAlert: false,
            alert: '',
            active: true,
            archive: false,
            isLoaded: false,
        };
    }

    componentDidMount() {
        const requestOptions = {
            method: 'GET'
        }
        fetch(`https://cors-anywhere.herokuapp.com/http://texastsa-tsayourway-catalog-prod.azurewebsites.net/api/Event/${this.props.match.params.id}`, requestOptions)
            .then(response => {
                if (response.ok) return response.json()
                else throw new Error(response.statusText)
            })
            .then(data => this.setState({ 
                isLoaded: true,
                id: data.id ? data.id : '',
                objectID: data.objectID ? data.objectID : '',
                name: data.name ? data.name : '',
                type: data.type,
                challenge: data.challenge,
                middleschool: data.middleschool ? true : false,
                highschool: data.highschool ? true : false,
                individual: data.individual ? true : false,
                team: data.team ? true : false,
                submittableUri: data.submittableUri,
                contact: data.contact ? data.contact : '',
                overview: data.overview ? data.overview : '',
                details: data.details ? data.details : '',
                rules: data.rules ? data.rules : '',
                stemIntegration: data.stemIntegration ? data.stemIntegration : '',
                relatedCareers: data.relatedCareers ? data.relatedCareers : '',
                rubric: data.rubric ? data.rubric : '',
                attachments: data.attachments ? data.attachments : '',
                showAlert: data.showAlert ? true : false,
                alert: data.alert ? data.alert : '',
                active: data.active ? true : false,
                archive: data.archive ? true : false
            })).catch((error) => {
                this.setState({
                    isFound: false
                })
            });     
    }

    eventType(type: any) {
        if (type === 'nqe-skill-development') return 'NQE Skill Development';
        else if (type === 'signature-tsa') return 'Signature TSA';
        else if (type === 'vex') return 'VEX';
        else return 'Unset';
    }

    printEvent() {
        window.print();
    }

    render() {
        if (this.state.isFound == false) {
            return (
                <>
                    <div className="not-found-msg">
                        <h2>Oops! That event doesn't exist.</h2>
                        <p>No event with id, <strong>{this.props.match.params.id}</strong>, exists.</p>
                    </div>
                    <PrimaryButton to="/">
                        Go Home
                    </PrimaryButton>
                </>
            );
        }
        if (this.state.isLoaded == false) {
            return <Loading />;
        } else {
            return (
                <EventProfileGrid>
                    <EventProfileAside>
                        <EventProfile>
                            <h3>{this.state.name}</h3>
                            <Attributes>
                                <li>
                                    Event Program: { this.eventType(this.state.type) }
                                </li>
                                <li>
                                    Individual: { this.state.individual ? 'Yes' : 'No' }
                                </li>
                                <li>
                                    Team: { this.state.team ? 'Yes' : 'No' }
                                </li>
                                <li>
                                    High School School: { this.state.highschool ? 'Yes' : 'No' }
                                </li>
                                <li>
                                    Middle School: { this.state.middleschool ? 'Yes' : 'No' }
                                </li>
                            </Attributes>
                            <ContactButton href={"mailto:" + this.state.contact}>
                                Contact Coordinator
                            </ContactButton>
                        </EventProfile>
                    </EventProfileAside>
                    <EventMainParent>
                        { this.state.showAlert ? <Alert message={this.state.alert} /> : ''}
                        <EventMain>
                            <ActionsOnEvent>
                                <Button onClick={()=>this.printEvent()}>
                                    Print
                                </Button>
                            </ActionsOnEvent>
                            <ParsedInfo
                                title="Overview"
                                content={this.state.overview}
                            />
                            <ParsedInfo 
                                title="Event Details"
                                content={this.state.details}
                            />
                            <ParsedInfo
                                title="Rules"
                                content={this.state.rules}
                            />
                            <ParsedInfo
                                title="Rubric"
                                content={this.state.rubric}
                            />
                            <ParsedInfo 
                                title="STEM Integration"
                                content={this.state.stemIntegration}
                            />
                            <ParsedInfo
                                title="Related Careers"
                                content={this.state.relatedCareers}
                            />
                            <ParsedInfo
                                title="Attachments"
                                content={this.state.attachments}
                            />
                        </EventMain>
                    </EventMainParent>
                </EventProfileGrid>
            );
            
        }
    }
}