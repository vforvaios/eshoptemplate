const user = ({ userReducer }) => userReducer.user;
const token = ({ userReducer }) => userReducer.user.token;
const myOrders = ({ userReducer }) => userReducer.myOrders.results;
const statuses = ({ userReducer }) => userReducer.statuses;
const currentOrderPage = ({ userReducer }) =>
  userReducer.myOrders.pagination.currentPage;

const ordersPagination = ({ userReducer }) => userReducer.myOrders.pagination;

export { user, token, myOrders, statuses, currentOrderPage, ordersPagination };
