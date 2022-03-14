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

    default:
      return state;
  }
}
