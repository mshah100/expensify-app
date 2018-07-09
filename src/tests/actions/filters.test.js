import moment from 'moment';
import {setStartDate, 
        setEndDate, 
        sortByDate, 
        sortByAmount, 
        setTextFilter
        } from '../../actions/filters';


test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should sort by date', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('should sort by amount', () => {
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('should set text filter to the value passed in', () => {
    const action = setTextFilter('Rent');
    expect(action).toEqual({
        type: 'FILTER_TEXT',
        text: 'Rent'
    });
});

test('should set text filter to default value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'FILTER_TEXT',
        text: ''
    });
});