import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
  switch (action.type) {
    // case "addBlogPost":
    //   return [
    //     ...state,
    //     {
    //       id: action.payload.content,
    //       title: action.payload.title,
    //       content: action.payload.content,
    //     },
    //   ];
    case "getBlogPosts":
      return action.payload;

    case "deleteBlogPost":
      return state.filter((blogPost) => blogPost.id !== action.payload);

    case "editBlogPost":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });

    default:
      return state;
  }
};
const addBlogPost = (dispatch) => {
  return async (title, content) => {
    //dispatch({ type: "addBlogPost", payload: { title, content } });
    await jsonServer.post("/blogposts", { title, content });
  };
};
const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({ type: "deleteBlogPost", payload: id });
  };
};
const editBlogPost = (dispatch) => {
  return async (id, title, content) => {
    await jsonServer.put(`/blogposts/${id}`, { title, content });
    dispatch({ type: "editBlogPost", payload: { id, title, content } });
  };
};

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/blogposts");
    dispatch({ type: "getBlogPosts", payload: response.data });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);
