import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL_BLOGS":
      return action.payload;

    // Don't need this anymore because we are directly contacting server
    // and refreshing the data through listeners in indexScreen.js
    // Look at useEffect function for more detial.

    // case "ADD_BLOG":
    //   return [
    //     ...state,
    //     {
    //       id: Math.floor(Math.random() * 9999),
    //       title: action.payload.title,
    //       content: action.payload.content,
    //     },
    //   ];
    case "DELETE_POST":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    case "EDIT_BLOG":
      return state.map((blogPost) => {
        console.log("BLOGPOST ID REDUCER", blogPost);
        console.log("Action Payload Edit", action.payload);
        if (blogPost.id === action.payload.id) {
          return {
            id: action.payload.id,
            title: action.payload.title,
            content: action.payload.content,
          };
        } else {
          return blogPost;
        }
      });

    default:
      return state;
  }
};

// All Actions

const getAllBlogs = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/blogposts");
    dispatch({
      type: "GET_ALL_BLOGS",
      payload: response.data,
    });
  };
};

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    await jsonServer.post("/blogposts", { title, content });
    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({
      type: "DELETE_POST",
      payload: id,
    });
  };
};

const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`, { title, content });
    dispatch({
      type: "EDIT_BLOG",
      payload: {
        id,
        title,
        content,
      },
    });
    callback();
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getAllBlogs },
  []
);
