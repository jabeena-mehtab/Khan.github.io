import React from 'react';

const Searchbox = ({Searchfield , searchChange}) =>
{
	return(
		<div>
    		<input
    		className='pa3 ba b--green bg lightest-blue'
    		type='Search' 
    		placeholder="Search for gems" 
    		onChange={searchChange}
    		/>

    	</div>
    )
}
export default Searchbox;