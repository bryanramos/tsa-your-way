import * as React from 'react';
import Catalog from '../components/Catalog';
import { PageHeading } from '../components/Common';

export class HighSchool extends React.Component {
    render() {
        return (
            <>
                <PageHeading>High School Events</PageHeading>
                <section>
                    <Catalog level="highschool" type="nqe-skill-development" />
                </section> 
            </>
        );
    }
}