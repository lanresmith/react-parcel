import React, { Component } from 'react'

class Table extends Component {
    render() {
        return (
            <table>
                <TableHead />
                <TableBody people={this.props.people} />
            </table>
        )
    }
}

const TableHead = () => (
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
        </tr>
    </thead>
)

const TableBody = (props) => {
    const rows = props.people.map((person) => {
        return (
            <tr key={person.id}>
                <td>{person.name}</td>
                <td>{person.age}</td>
            </tr>
        )
    })
    return (
        <tbody>
            {rows}
        </tbody>
    )
}

export default Table