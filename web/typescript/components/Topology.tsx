import * as React from "react";
import * as ReactDOM from "react-dom";
import { Toolbar } from "./ui/Toolbar";
import { Network } from "./ui/Network";
import { Console } from "./ui/Console";
import { afterFinalMount } from "../constants/afterFinalMount";

export class Topology extends React.Component<any, any> {
    constructor(props, context) {
        super(props, context);
        this.state = this.initState();
    }

    private initState = () => {
        return {
            edit_mode: "none"
        };
    }

    componentDidMount() {
        afterFinalMount();
    }

    changeEditMode(current_mode: string) {
        this.setState({
            edit_mode: current_mode
        });
    }

    render() {
        return (
            <div id="main">
                <Toolbar changeEditMode={this.changeEditMode.bind(this)} />
                <Network currentEditMode={this.state.edit_mode} />
                <Console currentEditMode={this.state.edit_mode} />
            </div>
        )
    }
};
