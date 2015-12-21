import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {updateTopStripDisplay, updateSortFilter} from '../actions/actions';
import TopStripDisplay from '../components/TopStripDisplay';
import {CATEGORIES, FILTERS} from '../constants';
import classNames from 'classnames';


export default class FilterContainer extends Component {
    render() {
        let {onChangeCategory, selected, selectedSortFilter, displayInTopStrip, updateTopStripDisplay, updateSortFilter} = this.props;
        var getClosedStrip = function () {
            return (
                <div className="top-strip-display">
                    <div className="sort-buttons-container">
                        {
                            _.map(['Recent', 'Featured', 'Most Popular'], function (sortBy, index) {
                                return <div className={classNames({
                                    "white-label": true,
                                    "font-16":true,
                                    "selected": sortBy === selectedSortFilter
                                })} key={sortBy + index}
                                            onClick={()=> updateSortFilter(sortBy)}>{sortBy}</div>;
                            })
                        }
                    </div>
                    <div className="filter-container">

                        {
                            _.map(FILTERS, function (filter, index) {
                                return (
                                    <div>
                                        <div className="category-selector" key={index}>
                                        <span className="selected-closed">
                                            {_.capitalize(selected)} Category
                                        <img className="down-arrow" src="/src/images/arrowDown.png"
                                             onClick={() => updateTopStripDisplay(filter.topStripDisplayName)}/>
                                        </span>
                                        </div>

                                    </div>
                                );
                            })
                        }

                    </div>

                </div>
            );
        };
        if (displayInTopStrip === 'CLOSED') {
            return getClosedStrip();
        } else {
            return (
                <div className="top-strip-display">

                    <TopStripDisplay items={FILTERS[displayInTopStrip].items} filterFunc={onChangeCategory}
                                     selected={selected}
                                     closeFunc={()=>updateTopStripDisplay('CLOSED')}></TopStripDisplay>
                </div>
            );
        }
    }
}


function mapStateToProps(state) {
    return {
        displayInTopStrip: state.topStripDisplay,
        selectedSortFilter: state.sortFilter
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateTopStripDisplay: (stripToDisplay)=> {
            dispatch(updateTopStripDisplay(stripToDisplay))
        },
        updateSortFilter: (sortBy) => dispatch(updateSortFilter(sortBy))

    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterContainer);