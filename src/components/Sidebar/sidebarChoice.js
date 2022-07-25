import React from 'react'

const SidebarChoice = ({title, Icon}) => {
    return(
        <h2>
            <Icon/> <span>{title}</span>
        </h2>
    )
}

export default SidebarChoice;