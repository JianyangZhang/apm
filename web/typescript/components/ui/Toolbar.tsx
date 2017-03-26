import * as React from "react";
import * as ReactDOM from "react-dom";

export class Toolbar extends React.Component<any, any> {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const inline = {
            display: "inline-block"
        }
        return (
            <div id="toolbar">
                {
                    this.props.items.map((item, index) => {
                        if (item.type == "button") {
                            // isLocked属性仅锁定button类型的item
                            return (<button key={index} onClick={item.callback} disabled={this.props.isLocked ? true : false}>{item.text}</button>)
                        }
                        if (item.type == "checkbox") {
                            return (
                                <div key={index} style={inline}>
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
