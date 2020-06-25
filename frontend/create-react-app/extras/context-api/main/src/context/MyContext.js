import React, { Component, createContext } from "react";

export const MyContext = createContext({ state: {}, actions: {} });

export class MyContextProvider extends Component {
	state = { data: {} };

	dummyAction = () => {
		this.setState({ data: { dummData: "hi!" } });
	};

	render() {
		const context = { state: this.state, actions: { dummyAction: this.dummyAction } };
		return <MyContext.Provider value={context}>{this.props.children}</MyContext.Provider>;
	}
}
