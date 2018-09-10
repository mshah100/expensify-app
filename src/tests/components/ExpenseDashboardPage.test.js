import React from 'react';
import ExpenseDashboardPage from '../../components/ExpenseDashBoardPage';
import {shallow} from 'enzyme';

test('should render the Expense Dashboard page', () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(wrapper).toMatchSnapshot();
});