import * as React from 'react';
import Catalog from '../components/Catalog';
import { PageHeading } from '../components/Common';

export class MiddleSchool extends React.Component {
    render() {
        return (
            <>
                <PageHeading>Middle School Events</PageHeading>
                <section>
                    <Catalog level="middleschool" type="nqe-skill-development" />
                </section> 
            </>
        );
    }
}