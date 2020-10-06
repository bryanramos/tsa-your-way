import React from 'react';
import EventPreview from './EventPreview';
import { Loading } from './Loading';
import styled from 'styled-components';

interface CatalogProps {
    level: string;
    type: string;
}
interface CatalogState {
    isLoaded: boolean;
    competitiveEvents: any[];
    error: boolean;
}

const Grid = styled.div`
    margin-top: 20px;
    display: grid;
    grid-gap: 24px;
    grid-template-columns: 1fr;
    @media (min-width: 500px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 767px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 992px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`;

const Count = styled.div`
    display: flex;
    justify-content: flex-end;
    @media screen and (max-width: 500px) {
        justify-content: flex-start;
    }
`;

export default class Catalog extends React.Component<CatalogProps, CatalogState> {
    constructor(props: CatalogProps) {
        super(props);
        this.state = {
            isLoaded: false,
            competitiveEvents: [],
            error: false
        }
    }

    componentDidMount() {
        this.getEvents();
    }

    getEvents() {
        const requestOptions = {
            method: 'GET'
        }
        fetch(`https://cors-anywhere.herokuapp.com/http://texastsa-tsayourway-catalog-prod.azurewebsites.net/api/Event/${this.props.level}/${this.props.type}`, requestOptions)
            .then(response => {
                if (response.ok) return response.json()
                else throw new Error(response.statusText)
            })
            .then(data => this.setState({
                competitiveEvents: data,
                isLoaded: true
            }))
            .catch (error => {
                this.setState({
                    error: true
                });
            })
    }

    printType(type: string) {
        if (type === "nqe-skill-development") {
            return 'NQE Skill Development';
        }
    }

    getSize(type: any) {
        var count = 0; 
        this.state.competitiveEvents.map((competitiveEvent: any, index: any) => {
            count++;
        });
        if (count === 1) {
            return `Showing ${count} event`;
        } else {
            return `Showing ${count} events`;
        }
    }

    render() {
        if (this.state.error == true) { // catch a fetch error
            return <div>Something went wrong. Try again later.</div>;
        } 
        if (!this.state.isLoaded) { // show loading screen while loading data
            return <Loading />;
        }
        else { // show events
            this.state.competitiveEvents.sort((a, b) => a.name > b.name ? 1 : -1);
            return (
                <>
                    <h4>{this.printType(this.props.type)}</h4>
                    <Count>
                        <span>{this.getSize(this.state.competitiveEvents)}</span>
                    </Count>
                    <Grid>
                        { 
                            this.state.competitiveEvents.map((competiveEvent: any, index: number) => 
                                <EventPreview competitiveEvent={competiveEvent} />
                            )
                        }
                    </Grid>
                </>
            );
        }
    }
}