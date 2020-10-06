import React from 'react';

interface ParsedInfoProps {
    title?: string;
    content?: string;
}

export default class ParsedInfo extends React.Component<ParsedInfoProps, any> {
    render() {
        if (this.props.content == null || this.props.content == "")
        {
            return '';
        } else {
            return (
                <section className="event-info">
                    <h3>{this.props.title}</h3>
                    <div className="section" dangerouslySetInnerHTML={{ __html: this.props.content || '' }} />
                </section>
            );
        }
    }
}