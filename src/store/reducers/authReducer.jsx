export const initialAuth = {
  isAuthenticated: false,
  user: {},
};

export default function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
      };

    case "USER_ACCESS":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };

    default:
      return state;
  }
}
