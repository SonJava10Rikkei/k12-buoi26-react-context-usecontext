import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <h3 className='goToCenter'>Bài tập buổi 26</h3>
            <div className="header">
                <ul className="header_menu">
                    <li className="header_item">
                        <Link to={"bai1"}>Bai1</Link>
                    </li>
                    <li className="header_item">
                        <Link to={"bai2"}>Bai2</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header