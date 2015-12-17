import React, { Component } from 'react';

class Sidebar extends Component {
    render(){
        return (
            <div className="sidebar">
                <h3 className="sidebar-header">Get Inspired</h3>
                <div className="divider"></div>
                <p className="sidebar-body">Our community of website creators share, discover & inspire one another.
                    Become part of the community and showcase your creation.</p>
            </div>
        )
    }
}

export default Sidebar;