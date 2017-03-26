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
            { text: "编辑节点", callback: () => { this.setState({ edit_mode: "edit_node" }); } },
            { text: "增加连接", callback: () => { this.setState({ edit_mode: "add_edge" }); } },
            { text: "编辑连接", callback: () => { this.setState({ edit_mode: "edit_edge" }); } },
            { text: "删除元素", callback: () => { this.setState({ edit_mode: "delete_selected" }); } },
            { text: "改变布局", callback: () => { this.setState({ edit_mode: "layout" }); } },
        ]
    }

    private initState = () => {
        return {
            edit_mode: "none",
        };
    }

    componentDidMount() {
        afterFinalMount();
    }

    render() {
        return (
            <div id="main">
                <Toolbar items={this.menuItems} />
                <Network editMode={this.state.edit_mode} />
                <Console editMode={this.state.edit_mode} />
                <RightClickMenu items={this.menuItems} />
            </div>
        )
    }
};
