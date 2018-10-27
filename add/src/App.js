import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
        <form class="form-horizontal">
            <fieldset>
                <legend>Legend</legend>
                <div class="form-group">
                 <label for="InputEmail1" class="col-lg-2 control-label">Email</label>
                    <div class="col-lg-10">
                     <input type="text" class="form-control" id="inputEmail1" placeholder="Email"/>

                    </div>
                </div>
            </fieldset>
        </form>
    );
  }
}

export default App;
