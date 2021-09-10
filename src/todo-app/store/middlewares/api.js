import axios from "axios";

const apiCall =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== "apiCall") return next(action);

    const { onSuccess, onError, method, data, url } = action.pyload;

    try {
      const resp = await axios.request({
        baseURL: "some_url",
        method,
        data,
        url,
      });

      dispatch({ type: onSuccess, payload: resp.data });
    } catch (error) {
      dispatch({ type: onError, payload: error });
    }
  };

export default apiCall;
