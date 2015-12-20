import React, {Component} from 'react';
import _ from 'lodash';
import classNames from 'classnames';


export default class TopStripDisplay extends Component {
    render() {
        let {items, selected, filterFunc} = this.props;
        return (
            <ul className="top-strip-display">
                {
                    _.map(items, function (item, index) {
                        let classes = classNames({
                            'white-label': true,
                            'font-16': true,
                            'selected': selected === item
                        });
                        return (
                            <li key={index}
                                className={classes}
                                onClick={()=>filterFunc(item)}
                            >
                                {item}
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}
