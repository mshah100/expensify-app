
import expenses from "../../selectors/expenses";
import moment from 'moment';
import expensesFixture from '../fixtures/expenses';

test('test should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = expenses(expensesFixture, filters);
    expect(result).toEqual([ expensesFixture[2], expensesFixture[1] ]);
});

test('should filter by start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const result = expenses(expensesFixture, filters);
    expect(result).toEqual([ expensesFixture[2], expensesFixture[0] ]);
});

test('should filter by end date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2, 'days')
    };
    const result = expenses(expensesFixture, filters);
    expect(result).toEqual([ expensesFixture[0], expensesFixture[1] ]);
});

test('sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = expenses(expensesFixture, filters);
    expect(result).toEqual([ expensesFixture[2], expensesFixture[0],  expensesFixture[1] ]);
});

test('sor by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const result = expenses(expensesFixture, filters);
    expect(result).toEqual([ expensesFixture[1], expensesFixture[2],  expensesFixture[0] ]);
});