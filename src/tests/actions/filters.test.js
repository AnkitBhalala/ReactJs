import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../../actions/filters';

test('should generate set start date action object', () => {
  const result = setStartDate(moment(0));
  expect(result).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0)
  });
});

test('should generate set end date action object', () => {
  const result = setEndDate(moment(0));
  expect(result).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0)
  });
});

test('should generate set text filter action object with provided data', () => {
  const result = setTextFilter('rent');
  expect(result).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'rent'
  }); 
});

test('should generate set text filter action object with default data', () => {
  const result = setTextFilter();
  expect(result).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  }); 
});

test('should generate sort by date action object', () => {
  const result = sortByDate();
  expect(result).toEqual({
    type: 'SORT_BY_DATE',
  }); 
});

test('should generate sort by amount action object', () => {
  const result = sortByAmount();
  expect(result).toEqual({
    type: 'SORT_BY_AMOUNT',
  }); 
});