import * as React from "react";
import * as ReactDOM from "react-dom";

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
                        return (<div key={index}><button onClick={item.callback}>{item.text}</button><br/></div>)
                    })
                }
            </div>
        )
    }
}
