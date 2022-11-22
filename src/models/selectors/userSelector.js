const user = ({ userReducer }) => userReducer.user;
const token = ({ userReducer }) => userReducer.user.token;
const myOrders = ({ userReducer }) => userReducer.myOrders;
const statuses = ({ userReducer }) => userReducer.statuses;

export { user, token, myOrders, statuses };
