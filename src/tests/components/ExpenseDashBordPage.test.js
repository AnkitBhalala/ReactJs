import React from 'react';
import {shallow} from 'enzyme';
import ExpenseDashbordPage from '../../components/ExpenseDashBordPage';

test("should render PageNotFound Page", () => {
  const wrapper = shallow(<ExpenseDashbordPage />);
  expect(wrapper).toMatchSnapshot();
});