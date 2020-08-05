import React, { useState } from 'react';

const TimelineItem = ( props ) => {
    
    
    
    const [ color, setColor ] = useState(props.getRandomColor());

    const user = props.user;
    const period = props.period;
    
    
    return(
        <div className="timeline-item">
            <div className="timeline-item-content">
                <span className="tag" style={{ background : color }}>
                    { user.id }
                </span>
                <time>{period.start_time}</time>
                {/* <p>{period.start_time}</p> */}
                <time>{period.end_time}</time>
                {/* <p>{period.end_time}</p> */}
                <p>{ user.real_name }</p>
                <span className="circle"></span>
             </div>     
        </div>


    );
};

export default TimelineItem;