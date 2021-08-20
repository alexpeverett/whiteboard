import React from 'react';
import Board from '../board/Board';

import './style.css';

class Container extends React.Component {
    constructor(items) {
        super(items)
    }

    render() {
        return (
            <div className="container">
                <Board/>
            </div>
        )
    }
}

export default Container