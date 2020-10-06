import React from 'react';
import { Bounds } from './Common';

export const SiteAlert = (props: any) => (
    <div className="site-alert">
        <Bounds>
            <span className="alert-glyphicon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg></span>
            <span>NQE Skill Development Program events are now posted!</span>
        </Bounds>
    </div>
);
