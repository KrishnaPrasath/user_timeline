import React from 'react';
import TimelineItem from './TimelineItem';


const Timeline = ( props ) => {
    
    const activeUser = props.activeUser;
    const active_periods = props.activeUser.activity_periods;
    const periods = props.date !== undefined ? active_periods.filter( period =>{ return Date.parse(period.start_time.substring(0,12)) === Date.parse(`${props.date}`)-19800000 }) : active_periods;
    
    let flag = props.date ? true : false;

    return(
        <div style={{ width : '100%' }}>
            {
                flag ? 
                (periods.length > 0 ? 
                    (<div className="timeline-container">
                        {periods.map( (period, idx) =>{
                        return (<TimelineItem  user = { activeUser } period = { period } key = { idx } getRandomColor={props.getRandomColor}/>)
                        })}
                    </div> ) :
                    (
                        <>
                        <h5>No timeline found!</h5>
                    </> ) ) : (<div className="timeline-container">
                        {active_periods.map( (period, idx) =>{
                        return (<TimelineItem  user = { activeUser } period = { period } key = { idx } getRandomColor={props.getRandomColor}/>)
                        })}
                    </div> )
            }
        </div>
    );
}

export default Timeline;