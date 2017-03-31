import * as React from "react";
import * as ReactDOM from "react-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { saveTopology } from "../actions/topologyActions";
import { Toolbar } from "./ui/Toolbar";
import { Network } from "./ui/Network";
import { Console } from "./ui/Console";
import { RightClickMenu } from "./ui/RightClickMenu";
import { didUpdate } from "../constants/didUpdate";
import { afterFinalMount } from "../constants/afterFinalMount";

class Topology extends React.Component<any, any> {
    private menuItems: object;
    private id: string;
    constructor(props, context) {
        super(props, context);
        this.state = this.initState();
        this.id = "sample";
        let flag = 0;
        this.menuItems = [
            { text: "增加节点", type: "button", callback: () => { this.setState({ edit_mode: "add_node" }); } },
            { text: "编辑节点", type: "button", callback: () => { this.setState({ edit_mode: "edit_node" }); } },
            { text: "增加连接", type: "button", callback: () => { this.setState({ edit_mode: "add_edge" }); } },
            { text: "编辑连接", type: "button", callback: () => { this.setState({ edit_mode: "edit_edge" }); } },
            { text: "删除元素", type: "button", callback: () => { this.setState({ edit_mode: "delete_selected" }); } },
            { text: "改变布局", type: "button", callback: () => { this.setState({ edit_mode: "layout" }); } },
            { text: "保存拓扑", type: "button", callback: () => { this.setState({ edit_mode: "save" + flag }); flag = (flag == 0) ? 1 : 0; } },
            { text: "锁定", type: "checkbox", callback: () => { this.setState({ edit_mode: "none", isLocked: !this.state.isLocked }); } },
        ]
    }

    private initState = () => {
        return {
            edit_mode: "none",
            isLocked: false
        };
    }

    componentDidUpdate() {
        didUpdate(this.state.isLocked);
    }

    componentDidMount() {
        afterFinalMount();
    }

    render() {
        return (
            <div id="main">
                <Toolbar items={this.menuItems} isLocked={this.state.isLocked} />
                <Network
                    id={this.id}
                    datagram={this.props.datagram}
                    isLocked={this.state.isLocked}
                    editMode={this.state.edit_mode}
                    onSave={this.props.saveTopology} />
                <Console editMode={this.state.edit_mode} />
                <RightClickMenu items={this.menuItems} />
            </div>
        )
    }
};


const mapStateToProps = (storeState) => {
    return {
        datagram: storeState.datagram,
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        saveTopology: saveTopology
    }, dispatch);
}

const TopologyApp = connect(mapStateToProps, mapDispatchToProps)(Topology);

export default TopologyApp;
