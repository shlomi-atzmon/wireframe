const INTIAL_STATE = {
  isSignedIn: null,
};

const authReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case "auth/signIn":
      return { ...state, isSignedIn: true };
    case "auth/signOut":
      return { ...state, isSignedIn: false };
    default:
      return state;
  }
};

export default authReducer;
