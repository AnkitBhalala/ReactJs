import moment from 'moment';

const filters = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const altFilters = {
  text: 'bill',
  sortBy: 'amount',
  startDate: undefined, //moment(0)
  endDate: undefined // moment(0).add(3, 'days')
};

export { filters, altFilters };