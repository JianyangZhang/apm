import * as React from "react";
import * as ReactDOM from "react-dom";
import * as vis from "vis";
import * as dataset from "../constants/dataset";
import { options } from "../constants/options";
import { Toolbar } from "./ui/Toolbar";
import { Network } from "./ui/Network";
import { Console } from "./ui/Console";
import { RightClickMenu } from "./ui/RightClickMenu";
import { afterFinalMount } from "../constants/afterFinalMount";

export class Topology extends React.Component<any, any> {
    private network: any;
    private dataset: any;
    private options: any;
    constructor(props, context) {
        super(props, context);
        this.dataset = {
            nodes: dataset.nodes,
            edges: dataset.edges
        };
        this.options = options;
        this.state = this.initState();
    }

    private initState = () => {
        return {
            network: this.network,
            dataset: this.dataset,
            options: this.options,
            edit_mode: "none",
            isEditNodePanelVisible: false,
            isLayoutPanelVisible: false
        };
    }

    componentDidMount() {
        this.network = new vis.Network(document.getElementById('network'), this.state.dataset, this.state.options);
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
                <Network network={this.state.network} dataset={this.state.dataset} currentEditMode={this.state.edit_mode} />
                <Console
                    isEditNodePanelVisible={this.state.isEditNodePanelVisible}
                    toggleEditNodePanelVisible={this.toggleEditNodePanelVisible}
                    isLayoutPanelVisible={this.state.isLayoutPanelVisible}
                    toggleLayoutPanelVisible={this.toggleLayoutPanelVisible}
                    currentEditMode={this.state.edit_mode} />
                <RightClickMenu
                    isEditNodePanelVisible={this.state.isEditNodePanelVisible}
                    toggleEditNodePanelVisible={this.toggleEditNodePanelVisible}
                    isLayoutPanelVisible={this.state.isLayoutPanelVisible}
                    toggleLayoutPanelVisible={this.toggleLayoutPanelVisible}
                    changeEditMode={this.changeEditMode} />
            </div>
        )
    }
};
