import axios from "axios";

const API_BASE = "http://localhost:4000" + "/v1";

const apiCall =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== "apiCall") return next(action);

    // next(action);

    const { onSuccess, onError, method, data, url } = action.payload;

    try {
      const resp = await axios.request({
        baseURL: API_BASE,
        method,
        data,
        url,
      });

      dispatch({
        type: onSuccess,
        payload: resp.data,
      });
    } catch (error) {
      dispatch({ type: onError, payload: error });
    }
  };

export default apiCall;
