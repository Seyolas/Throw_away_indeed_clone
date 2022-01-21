import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    return (
        <nav>
            <header className='header-one'>
            <img width={150} src="./indeed-logo.svg" alt="" />
            <Link href='https://www.youtube.com/watch?v=9Auq9mYxFEE&feature=emb_title'><a rel='noreferrer' target='blank'>Watch Live</a></Link>
            </header>




        <style jsx>{`
            nav{
                width:80%;
                max-width:80;
                background-color:white;
                margin:0 auto;
            }
            .header-one{
                display:flex;
                justify-content:space-around;
                align-items:center;
                margin:1rem 0;
            }
           
            
            `}

        </style>
        </nav>
    )
}

export default Navbar
