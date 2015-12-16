import React, {Component} from 'react';
import _ from 'lodash';


export default class CategorySelector extends Component {
    render() {
        return (
            <ul>
                {
                    _.map(this.props.categories, (category, index) => {
                        return (
                            <li onClick={()=>this.props.onChangeCategory(category)}
                                key={index}
                                style={{textDecoration: this.props.selected === category ? 'underline' : 'none'}}
                            >
                                {category}
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}