import React, { Component } from 'react';
import classNames from 'classnames';


class Sidebar extends Component {
    render() {
        var isVisible = this.props.visibility;
        var sidebarClasses = classNames({
            sidebar: true,
            hidden: !isVisible
        });

        var sidebarChildren;
        if (isVisible) {
            sidebarChildren = (
                <div className="sidebar-content">
                    <div className="sidebar-toggler">
                        <img onClick={()=>this.props.changeVisibilityFunction(false)} className="sidebar-toggler-arrow"
                             src="/src/images/arrowSidebar.png"/>
                    </div>
                    <h3 className="sidebar-header">Get Inspired</h3>
                    <div className="divider"></div>
                    <p className="sidebar-body">Our community of website creators share, discover & inspire one another.
                        Become part of the community and showcase your creation.</p>
                    <div className="white-label join-us">Join Us</div>
                </div>
            );
        } else {
            sidebarChildren = (
                <div className="sidebar hidden">
                    <div className="sidebar-toggler-closed">
                        <img onClick={()=>this.props.changeVisibilityFunction(!isVisible)} className="sidebar-toggler-arrow-closed"
                             src="/src/images/arrowSidebar.png"/>
                    </div>
                </div>
            );
        }

        return (
            <div className={sidebarClasses}>
                {sidebarChildren}
            </div>
        );
    }
}

export default Sidebar;