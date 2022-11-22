const user = ({ userReducer }) => userReducer.user;
const token = ({ userReducer }) => userReducer.user.token;
const myOrders = ({ userReducer }) => userReducer.user.myOrders;

export { user, token, myOrders };
