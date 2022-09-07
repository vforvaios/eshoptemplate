const user = ({ userReducer }) => userReducer.user;
const token = ({ userReducer }) => userReducer.user.token;

export { user, token };
