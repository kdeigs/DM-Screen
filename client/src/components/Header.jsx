import React from 'react';

const Header = () => {
    return(
        <div className='header'>
            <h1 className='title is-1 center'>Deighan's Dynamic DM Screen</h1>
            <div className='navbar'>
                <div className='navbarItem'>
                    <p className='navbarText'>Home</p>
                </div>

                <div className='navbarItem'>
                    <p className='navbarText'>Characters</p>
                </div>

                <div className='navbarItem'>
                    <p className='navbarText'>NPCs</p>
                </div>

                <div className='navbarItem'>
                    <p className='navbarText'>Rules</p>
                </div>

                <div className='navbarItem'>
                    <p className='navbarText'>Pricing</p>
                </div>

                <div className='navbarItem'>
                    <p className='navbarText'>Lore</p>
                </div>

                <div className='navbarItem'>
                    <p className='navbarText'>Locations</p>
                </div>
            </div>
        </div>
    )
}

export default Header;