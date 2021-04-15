import React, {useState, useEffect} from 'react';

const baseURL = 'http://localhost:3003';

function Home(){

    const [ruleSearch, setRuleSearch] = useState('');
    const [allRules, setAllRules] = useState([]);

    useEffect(() => {
        fetch(baseURL+'/populateRules')
            .then(res => res.json())
            .then(resJson => {
                console.log(resJson.data.results);
                setAllRules(resJson.data.results);
            });
    }, [])

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
                    <form>
                        <input type='text' name='ruleSearch' value={ ruleSearch } onChange = { setRuleSearch } />
                    </form>
                    { allRules.map((item, key) => {
                        return(<p className = 'ruleItem'>{ item.name }</p>);
                    })}
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