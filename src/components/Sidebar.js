import React, { Component } from 'react';
import classNames from 'classnames';


class Sidebar extends Component {
    render() {
        var sidebarClasses = classNames({
            sidebar: true,
            hidden: !this.props.visibility
        });
        return (
            <div className={sidebarClasses}>
                <div className="sidebar-content">
                    <div className="sidebar-toggler">
                        <img onClick={()=>this.props.changeVisibilityFunction(false)} className="sidebar-toggler-arrow" src="/src/images/arrowSidebar.png"/>
                    </div>
                    <h3 className="sidebar-header">Get Inspired</h3>
                    <div className="divider"></div>
                    <p className="sidebar-body">Our community of website creators share, discover & inspire one another.
                        Become part of the community and showcase your creation.</p>
                </div>
            </div>
        )
    }
}

export default Sidebar;