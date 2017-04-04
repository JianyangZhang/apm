import * as React from "react";
import * as ReactDOM from "react-dom";
import { assign } from 'lodash';

export class Toolbar extends React.Component<any, any> {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const checkboxStyle = {
            display: this.props.isEditing ? "none" : "inline-block",
            float: "right",
            margin: "5px 10px 0px 0px"
        }
        return (
            <div id="toolbar">
                {
                    this.props.items.map((item, index) => {
                        if (item.type == "button") {
                            const checkDisabled: boolean = (this.props.isLocked || item.isDisabled) ? true : false;
                            const itemStyle = assign({}, item.getStyle(), { display: this.props.isEditing ? "none" : "inline-block", color: checkDisabled ? "gray" : "black" });
                            return (<button style={itemStyle} key={index} onClick={item.callback} disabled={checkDisabled}>{item.text}</button>)
                        }
                        if (item.type == "checkbox") {
                            return (
                                <div key={index} style={checkboxStyle}>
                                    <span>{item.text}</span>
                                    <input type="checkbox" onChange={item.callback} />
                                </div>
                            )
                        }
                    })
                }
            </div>
        )
    }
}
