import * as React from "react";
import * as ReactDOM from "react-dom";
import { Toolbar } from "./components/Toolbar";
import { Network } from "./components/Network";
import { Console } from "./components/Console";
import { afterFinalMount } from "./constants/afterFinalMount";

var Topology = React.createClass({
    getInitialState: function() {
        return {
            edit_mode: "none"
        }
    },
    componentDidMount: function() {
        afterFinalMount();
    },
    changeEditMode: function(current_mode: string) {
        this.setState({
            edit_mode: current_mode
        });
    },
    componentDidUpdate: function() {
        // console.log('edit_mode: ' + this.state.edit_mode);
    },
    render: function() {
        return (
            <div id="main">
                <Toolbar changeEditMode={this.changeEditMode} />
                <Network currentEditMode={this.state.edit_mode} />
                <Console currentEditMode={this.state.edit_mode} />
            </div>
        )
    }
});

ReactDOM.render(<Topology />,
    document.getElementById('topology'),
)
