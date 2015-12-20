import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {updateTopStripDisplay} from '../actions/actions';
import TopStripDisplay from '../components/TopStripDisplay';
import {CATEGORIES, FILTERS} from '../constants';


export default class FilterContainer extends Component {
    render() {
        let {onChangeCategory, selected, displayInTopStrip, updateTopStripDisplay} = this.props;
        var getClosedStrip = function () {
            return (
                <div className="filter-container">

                    {
                        _.map(FILTERS, function (filter, index) {
                            return (
                                <div className="category-selector" key={index}>
                                        <span className="selected-closed">
                                            {_.capitalize(selected)} Category
                                        <img className="down-arrow" src="/src/images/arrowDown.png"
                                             onClick={() => updateTopStripDisplay(filter.topStripDisplayName)}/>
                                        </span>
                                </div>

                            )
                        })
                    }
                </div>
            );
        };
        if (displayInTopStrip === 'CLOSED') {
            return getClosedStrip();
        } else {
            return <TopStripDisplay items={FILTERS[displayInTopStrip].items} filterFunc={onChangeCategory}
                                    selected={selected}></TopStripDisplay>;
        }
    }
}


function mapStateToProps(state) {
    return {
        displayInTopStrip: state.topStripDisplay
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateTopStripDisplay: (stripToDisplay)=> {
            dispatch(updateTopStripDisplay(stripToDisplay))
        }

    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterContainer);