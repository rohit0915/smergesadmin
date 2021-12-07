import React, { Fragment, Component } from "react";
import Header from "./Header/Header.jsx";

const HOC = (Wcomponent) => {
    return class extends Component {
        render() {
            return (
                <Fragment>
                    <div className="app-container-hoc main-margin">
                        <Header {...this.props} />
                        <div>
                            <Wcomponent {...this.props} />
                        </div>
                       
                    </div>
                </Fragment>
            );
        }
    };
};

export default HOC;
