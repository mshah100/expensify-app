import expenses from '../../reducers/expenses';
import expensesFixture from '../fixtures/expenses';
import moment from 'moment';

test('should test default state', () => {
    const state = expenses(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
            type: 'REMOVE_EXPENSE', 
            id: expensesFixture[1].id
    };
    const state = expenses(expensesFixture, action);
    expect(state).toEqual([expensesFixture[0], expensesFixture[2]]);
});

test('should remove not expense if id is not found', () => {
    const action = {
            type: 'REMOVE_EXPENSE', 
            id: '-1'
    };
    const state = expenses(expensesFixture, action);
    expect(state).toEqual(expensesFixture);
});

test('should add an expense', () => {
    const expenseToAdd = {
        id: '4',
        description: 'Power',
        note: '',
        amount: 10960,
        createdAt: moment()
    };
    const action = {
            type: 'ADD_EXPENSE', 
            expense : expenseToAdd
    };
    const state = expenses(expensesFixture, action);
    expect(state).toEqual([expensesFixture[0], expensesFixture[1], expensesFixture[2], expenseToAdd]);
});

test('should edit an expense', () => {
    const expenseToEdit = {
        id: '2',
        description: 'Rent',
        note: 'Test'
    };
    const action = {
        type: 'EDIT_EXPENSE',
        updates: expenseToEdit
    };
    const state = expenses(expensesFixture, action);
    expect(state[1].description).toEqual(expenseToEdit.description);
});

test('should not edit expense if not found', () => {
    const expenseToEdit = {
        id: '6',
        description: 'Rent',
        note: 'Test'
    };
    const action = {
        type: 'EDIT_EXPENSE',
        updates: expenseToEdit
    };
    const state = expenses(expensesFixture, action);
    expect(state).toEqual(expensesFixture);
});