import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {updateTopStripDisplay, updateSortFilter} from '../actions/actions';
import TopStripDisplay from '../components/TopStripDisplay';
import {CATEGORIES, FILTERS} from '../constants';


export default class FilterContainer extends Component {
    render() {
        let {onChangeCategory, selected, displayInTopStrip, updateTopStripDisplay, updateSortFilter} = this.props;
        var getClosedStrip = function () {
            return (
                <div className="top-strip-display">
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
                    <div className="sort-buttons-container">
                        {
                            _.map(['Recent', 'Featured', 'Most Popular'], function (sortBy, index) {
                                return <div className="white-label font-16" key={sortBy + index} onClick={()=> updateSortFilter(sortBy)}>{sortBy}</div>;
                            })
                        }
                    </div>
                </div>
            );
        };
        if (displayInTopStrip === 'CLOSED') {
            return getClosedStrip();
        } else {
            return <TopStripDisplay items={FILTERS[displayInTopStrip].items} filterFunc={onChangeCategory}
                                    selected={selected}
                                    closeFunc={()=>updateTopStripDisplay('CLOSED')}></TopStripDisplay>;
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
        },
        updateSortFilter: (sortBy) => dispatch(updateSortFilter(sortBy))

    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterContainer);