import React, { Component } from 'react'
import Table from './Table'

class App extends Component {
    render() {
        const people = [
            {
                id: 1,
                name: 'Sally',
                age: 19
            },
            {
                id: 2,
                name: 'Charlie',
                age: 15
            },
            {
                id: 3,
                name: 'Donna',
                age: 12
            },
        ]

        return (
            <div className="App">
                <Table people={people} />
            </div>
        )
    }
}

export default App