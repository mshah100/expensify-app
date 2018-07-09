import moment from 'moment';
import filters from '../../reducers/filters';

test ('should set up default filter values', () => {
    const state = filters(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sort by to amount', () => {
    const state = filters(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set sort by to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = {type: 'SORT_BY_DATE'};
    const state = filters(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set filter text', () => {
    const action = {type: 'FILTER_TEXT',
                    text: 'Rent'};
    const state = filters(undefined, action);
    expect(state.text).toEqual('Rent');
});

test('should set start date', () => {
    const action = {type: 'SET_START_DATE',
                    startDate: moment().startOf('month')};
    const state = filters(undefined, action);
    expect(state.startDate).toEqual(moment().startOf('month'));
});

test('should set end date', () => {
    const action = {type: 'SET_END_DATE',
                    endDate: moment().startOf('month')};
    const state = filters(undefined, action);
    expect(state.endDate).toEqual(moment().startOf('month'));
});