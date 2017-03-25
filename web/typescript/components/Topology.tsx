import * as React from "react";
import * as ReactDOM from "react-dom";
import { Toolbar } from "./ui/Toolbar";
import { Network } from "./ui/Network";
import { Console } from "./ui/Console";
import { RightClickMenu } from "./ui/RightClickMenu";
import { afterFinalMount } from "../constants/afterFinalMount";

export class Topology extends React.Component<any, any> {
    private menuItems: any;
    constructor(props, context) {
        super(props, context);
        this.state = this.initState();
        this.menuItems = [
            { text: "增加节点", callback: () => { this.setState({ edit_mode: "add_node" }); } },
            { text: "编辑节点", callback: () => { this.setState({ edit_mode: "edit_node" }); this.toggleEditNodePanelVisible(); } },
            { text: "增加连接", callback: () => { this.setState({ edit_mode: "add_edge" }); } },
            { text: "编辑连接", callback: () => { this.setState({ edit_mode: "edit_edge" }); } },
            { text: "删除元素", callback: () => { this.setState({ edit_mode: "delete_selected" }); } },
            { text: "改变布局", callback: () => { this.setState({ edit_mode: "layout" }); this.toggleLayoutPanelVisible(); } },
        ]
    }
    private initState = () => {
        return {
            edit_mode: "none",
            isEditNodePanelVisible: false,
            isLayoutPanelVisible: false
        };
    }

    componentDidMount() {
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
                <Toolbar items={this.menuItems} />
                <Network currentEditMode={this.state.edit_mode} />
                <Console
                    currentEditMode={this.state.edit_mode}
                    isEditNodePanelVisible={this.state.isEditNodePanelVisible}
                    toggleEditNodePanelVisible={this.toggleEditNodePanelVisible}
                    isLayoutPanelVisible={this.state.isLayoutPanelVisible}
                    toggleLayoutPanelVisible={this.toggleLayoutPanelVisible}
                     />
                <RightClickMenu items={this.menuItems} />
            </div>
        )
    }
};
