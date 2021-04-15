import React, {useState, useEffect} from 'react';

const Home = () => {

    const [ruleSearch, setRuleSearch] = useState('');

    return(
        <div className='homepage columns'>
            <div className='column'>
                <div className='pinnedRules'>
                    <h3 className='center title is-3'>Pinned Rules</h3>
                    <div>
                        <p>RULES RULES RULES</p>
                    </div>
                </div>
                <div className='searchRules'>

                </div>
            </div>

            <div className='column'>
                <h3 className='center title is-3'>Hi</h3>
            </div>

            <div className='column'>
                <h3 className='center title is-3'>Hello</h3>
            </div>
        </div>
    )
}

export default Home;