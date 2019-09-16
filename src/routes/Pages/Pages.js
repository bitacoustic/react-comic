import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

class Pages extends Component {
    render() {
        const { params } = this.props.match
        const id = parseInt(params.id)
        const nav = {
            previous: id > 0 ? id - 1 : -1,
            current: id,
            next: id + 1
        }

        return (
            <div>
                <h1>Page {nav.current}</h1>

                <p>
                    { nav.previous > -1 && <Link to={`/page/${nav.previous}`}>&lt;&lt;</Link> }
                    <Link to={`/page/${nav.next}`}>&gt;&gt;</Link>
                </p>
            </div>
        )
    }
}

export default Pages