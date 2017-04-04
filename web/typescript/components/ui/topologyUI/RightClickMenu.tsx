import * as React from "react";
import * as ReactDOM from "react-dom";
import { assign } from 'lodash';

export class RightClickMenu extends React.Component<any, any> {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const style = {
            position: "absolute"
        }
        return (
            <div id="right_click_menu" style={style}>
                {
                    this.props.items.map((item, index) => {
                        if (item.type == "button") {
                            const checkDisabled: boolean = (this.props.isLocked || item.isDisabled) ? true : false;
                            const itemStyle = assign({}, item.getStyle(), { display: this.props.isEditing ? "none" : "inline-block", color: checkDisabled ? "gray" : "black" });
                            return (<div key={index}><button style={itemStyle} key={index} onClick={item.callback} disabled={checkDisabled} >{item.text}</button><br /></div>)
                        }
                    })
                }
            </div>
        )
    }
}
