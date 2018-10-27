import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
        <div className="container">
        <div className="row">
            <div className="col-md-8">
        <form className="form-horizontal">
            <fieldset>
                <legend>Search Nearby Places</legend>
                <div class="col-md-10">

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
                <ul>
                    <li>Kandy</li>
                    <li>Colombo</li>
                </ul>
            </div>
            <div className="col-md-4">
                <h2>Saved Places</h2>

            </div>
        </div>
        </div>
    );
  }
}

export default App;
