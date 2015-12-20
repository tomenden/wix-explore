import React, {Component} from 'react';
import _ from 'lodash';


export default class CategorySelector extends Component {
    render() {
        return (
            <div>
                {this.props.selected}
                <img src="/src/images/arrowDown.png"/>
            </div>
        );
    }
}

function mapCategories() {
    return _.map(this.props.categories, (category, index) => {
        return (
            <li onClick={()=>this.props.onChangeCategory(category)}
                key={index}
                style={{textDecoration: this.props.selected === category ? 'underline' : 'none'}}
            >
                {category}
            </li>
        );
    });
}