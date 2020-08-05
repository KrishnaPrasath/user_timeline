import React from 'react';
import TimelineItem from './TimelineItem';


const Timeline = ( props ) => {
    const activeUser = props.activeUser;
    const active_periods = props.activeUser.activity_periods;


    return(

        <div style={{ width: '100%' }}>
            <h3>Timeline</h3>
            {
                active_periods.length > 0 && 
                <div className="timeline-container">
                    {active_periods.map( (period, idx) =>{
                    return (<TimelineItem  user = { activeUser } period = { period } key = { idx } getRandomColor={props.getRandomColor}/>)
                    })}
                </div>
                
            }
        </div>
    );
}

export default Timeline;