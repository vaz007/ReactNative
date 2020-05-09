import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          content : action.payload.content
        },
      ];
      case "DELETE_POST" : 
        return state.filter((blogPost) => blogPost.id !== action.payload)
      case 'EDIT_BLOG' :
         return state.map((blogPost) => {
          console.log("BLOGPOST ID REDUCER", blogPost)
          console.log("Action Payload Edit", action.payload)
              if (blogPost.id === action.payload.id) {
                  return {
                    id : action.payload.id,
                    title : action.payload.title,
                    content : action.payload.content
                    }
                }
                else{
                    return blogPost;
                }
         })
      
     default:
      return state;
  }
};



const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({
      type: "ADD_BLOG",
      payload : {
          title,
          content
      }
    });
    callback();
  };
};

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({
            type : "DELETE_POST",
            payload : id
        })
    }
}

const editBlogPost = (dispatch) => {
    return (id, title, content, callback) => {
        dispatch ({
            type : 'EDIT_BLOG',
            payload : {
                id,
                title,
                content,
            }
        })
        callback()
    }

}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{title : 'Test Post', content : 'Test Content', id : 1}]
);
