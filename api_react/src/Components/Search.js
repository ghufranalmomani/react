import React from 'react';


class Search extends React.Component{
    render(){
        return(
            <div>
                <form>
                    <div class="form-controls">
                        <label>Search</label>
                        <input id="video-search" type="text" placeholder='Enter Search Keyword'/>
                    </div>
                </form>
            </div>
        )
    }
}


export default Search;
