import React, { Fragment,useState } from 'react';

const Accordin = ({items}) =>{
    const [activeIndex , SetActiveIndex]= useState(null);

    const ClickTitleIndex = (index)=>{
       SetActiveIndex(index)
    }
    const renderedItem = items.map((item,index)=>{
        
        const active = activeIndex === index ? 'active': ''
 
        return<Fragment key={item.title}>
            <div 
            className={`title ${active}`}
            onClick={()=>{ClickTitleIndex(index)}}
            >
                <i className='dropdown icon'></i>
                {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>
        </Fragment>
    })
    return(
    <div className='ui styled accordion'>
        {renderedItem}
    </div>
    )
}

export default Accordin;