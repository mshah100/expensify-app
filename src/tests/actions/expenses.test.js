import {editExpense, addExpense, removeExpense} from '../../actions/expenses';


test('Should setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});


test('Should set up edit expense action object', () => {
    const expenseOne = {
        description: 'New Test'
    };
    const action = editExpense('123abc', {...expenseOne})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {description: 'New Test'}
    });
});

test('Should set up add expense action item with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note:  'This was last months rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('Should set up add expense object with default values', () => {
    const action = addExpense();
    const expenseDefault = {
        description: '', 
        note: '', 
        amount: 0,  
        createdAt: 0
    };
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseDefault, 
            id:  expect.any(String)
        }
    });
});