import * as React from "react";
import * as ReactDOM from "react-dom";
import * as vis from "vis";
import * as datagram from "../constants/datagram";
import { options } from "../constants/options";
import { Toolbar } from "./ui/Toolbar";
import { Network } from "./ui/Network";
import { Console } from "./ui/Console";
import { afterFinalMount } from "../constants/afterFinalMount";

export class Topology extends React.Component<any, any> {
    private network: any;
    private data: any;
    private options: any;
    constructor(props, context) {
        super(props, context);
        this.data = {
            nodes: datagram.nodes,
            edges: datagram.edges
        };
        this.options = options;
        this.state = this.initState();
    }

    private initState = () => {
        return {
            network: this.network,
            data: this.data,
            options: this.options,
            edit_mode: "none",
            isEditNodePanelVisible: false,
            isLayoutPanelVisible: false
        };
    }

    componentDidMount() {
        this.network = new vis.Network(document.getElementById('showcase'), this.state.data, this.state.options);
        this.setState({
            network: this.network
        });
        afterFinalMount();
    }

    changeEditMode = (current_mode: string) => {
        this.setState({
            edit_mode: current_mode
        });
    }

    toggleEditNodePanelVisible = () => {
        if (this.state.isEditNodePanelVisible) {
            this.setState({
                isEditNodePanelVisible: false
            });
        } else {
            this.setState({
                isEditNodePanelVisible: true
            });
        }
    }

    toggleLayoutPanelVisible = () => {
        if (this.state.isLayoutPanelVisible) {
            this.setState({
                isLayoutPanelVisible: false
            });
        } else {
            this.setState({
                isLayoutPanelVisible: true
            });
        }
    }

    render() {
        return (
            <div id="main">
                <Toolbar
                    isEditNodePanelVisible={this.state.isEditNodePanelVisible}
                    toggleEditNodePanelVisible={this.toggleEditNodePanelVisible}
                    isLayoutPanelVisible={this.state.isLayoutPanelVisible}
                    toggleLayoutPanelVisible={this.toggleLayoutPanelVisible}
                    changeEditMode={this.changeEditMode} />
                <Network network={this.state.network} currentEditMode={this.state.edit_mode} />
                <Console
                    isEditNodePanelVisible={this.state.isEditNodePanelVisible}
                    toggleEditNodePanelVisible={this.toggleEditNodePanelVisible}
                    isLayoutPanelVisible={this.state.isLayoutPanelVisible}
                    toggleLayoutPanelVisible={this.toggleLayoutPanelVisible}
                    currentEditMode={this.state.edit_mode} />
            </div>
        )
    }
};
