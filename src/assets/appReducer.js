export const initialSate = {
  auth: {
    isAuthenticated: false,
    currentUser: null,
  },
  users: [],
  posts: [],
  comments: [],
};

const globalReducer = (state, action) => {
  switch (action.type) {
    case "REGISTER_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "LOGIN":
      // eslint-disable-next-line no-case-declarations
      const user = state.users.find(
        (user) =>
          user.username === action.payload.username &&
          user.password === action.payload.password
      );

      if (user) {
        return {
          ...state,
          auth: {
            isAuthenticated: true,
            currentUser: user,
          },
        };
      } else {
        return {
          ...state,
          auth: {
            isAuthenticated: false,
            currentUser: null,
            autError: true,
          },
        };
      }
    case "LOGOUT": {
      return {
        ...state,
        auth: { isAuthenticated: false, currentUser: null },
      };
    }

    // posts
    case "ADD_POST": {
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
    }

    // delet
    case "DELETE_POST": {
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    }

    case "EDIT_POST": {
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.id
            ? {
                ...action.payload,
                author: post.author,
              }
            : post
        ),
      };
    }

    default:
      throw new Error("invalid action type");
  }
};
export default globalReducer;
