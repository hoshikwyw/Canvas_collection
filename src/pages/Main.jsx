import React from 'react'
import { links } from "../components/PageLinks"
import { Link } from 'react-router-dom'
import Titles from '../components/Titles'

const Main = () => {
    return (
        <div>
            {links?.map((page) => (
                <Link to={page?.to} key={page?.to}>
                    <Titles linkName={page?.linkName} />
                </Link>
            ))}
        </div>
    )
}

export default Main
