import * as React from "react";
import * as ReactDOM from "react-dom";

export class Toolbar extends React.Component<any, any> {
    constructor(props, context) {
        super(props, context);
        this.state = this.initState();
    }

    private initState = () => {
        return {
            isLocked: false,
        };
    }

    render() {
        return (
            <div id="toolbar">
                {
                    this.props.items.map((item, index) => {
                        return (<button key={index} onClick={item.callback}>{item.text}</button>)
                    })
                }
            </div>
        )
    }
}
