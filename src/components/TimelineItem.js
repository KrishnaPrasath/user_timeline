import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';

const TimelineItem = ( props ) => {
    
    const [ tooltipOpen, setTooltipOpen ] = useState(false);
    const [ color, setColor ] = useState(props.getRandomColor());

    const user = props.user;
    const period = props.period;
    
    const toggle = () => { setTooltipOpen(!tooltipOpen) };
    
    return(
        <div className="timeline-item">
            <div className="timeline-item-content">
                <span className="tag" style={{ background : color }}>
                    { period.start_time.substring(0,12) }
                </span>
                <time><span className="font-italic">Started at:</span> <mark>{period.start_time.substring(11)}</mark></time>
                <time><span className="font-italic">End at:</span> <mark>{period.end_time.substring(11)}</mark></time>
                <p><strong>{ user.real_name }</strong></p>
                <span className="text-muted id">{ user.id }</span>
                <span className="circle" id={ `c${period.start_time.substring(0,5).replace(' ','')}` }>
                    <Tooltip placement="right" isOpen={tooltipOpen} target={ `c${period.start_time.substring(0,5).replace(' ','')}` } toggle={toggle}>
                        { period.start_time.substring(12) + '-' + period.end_time.substring(11) }
                    </Tooltip>
                </span>
             </div>     
        </div>
    );
};

export default TimelineItem;