import React,{Component} from 'react';

class Search extends Component{


    render(){

        return(
            <form className="form-horizontal">
                <fieldset>
                    <legend>Search Nearby Places</legend>
                    <div className="col-md-10">

                        <div className="form-group">
                            <label htmlFor="InputEmail1" className="col-lg-2 control-label">Place</label>
                            <div className="col-lg-10">
                                <input type="text" className="form-control" id="inputEmail1" placeholder="Search here"/>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-primary">Search</button>
                    </div>
                </fieldset>
            </form>
        )

    }

}

export default Search;
