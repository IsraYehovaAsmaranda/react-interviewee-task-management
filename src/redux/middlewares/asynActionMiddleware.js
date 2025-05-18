import { error, loading, success } from "../slices/uiSlice";

const asyncActionMiddlewares =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    
    if (action.type.endsWith("/pending")) {
      dispatch(loading());
    }
    
    const response = next(action);
    
    if (action.type.endsWith("/fulfilled")) {
      dispatch(success());
    }

    if (action.type.endsWith("rejected")) {
      dispatch(error(action.payload));
    }

    return response;
  };

export default asyncActionMiddlewares;
