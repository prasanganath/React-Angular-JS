import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
        <div className="container">
        <form className="form-horizontal">
            <fieldset>
                <legend>Search Nearby Places</legend>
                <div className="form-group">
                 <label htmlFor="InputEmail1" className="col-lg-2 control-label">Place</label>
                    <div className="col-lg-10">
                     <input type="text" className="form-control" id="inputEmail1" placeholder="Search here"/>

                    </div>
                </div>
            </fieldset>
        </form>
        </div>
    );
  }
}

export default App;
