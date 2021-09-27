import React from 'react'
import "./Colum.scss"

import Task from 'components/Task/Task'

const Colum = () => {
    return (
        <div className="colums">
            <header>BrainStorm</header>
            <ul className="task_list">
                {/* <li className="task_item">Add what you'd like to work on below</li>
                <li className="task_item">Add what you'd like to work on below</li>
                <li className="task_item">Add what you'd like to work on below</li>
                <li className="task_item">Add what you'd like to work on below</li> */}
                <Task></Task>
            </ul>
            <footer>Add Another Card</footer>
        </div>
    )
}

export default Colum
