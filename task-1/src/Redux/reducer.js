import {
  ADD_DETAILS_FAILURE,
  ADD_DETAILS_REQUEST,
  ADD_DETAILS_SUCCESS,
  DELETE_DETAILS_FAILURE,
  DELETE_DETAILS_REQUEST,
  DELETE_DETAILS_SUCCESS,
  GET_NAME_FAILURE,
  GET_NAME_REQUEST,
  GET_NAME_SUCCESS,
} from "./actionsTypes";

const initialState = {
  isError: false,
  isLoading: false,
  data: [],
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_NAME_REQUEST:
      return { ...state, isLoading: true, isError: false };

    case GET_NAME_SUCCESS:
      return { ...state, isLoading: false, isError: false, data: payload };

    case GET_NAME_FAILURE:
      return { ...state, isLoading: false, isError: true };

    case ADD_DETAILS_REQUEST:
      return { ...state, isLoading: true, isError: false };

    case ADD_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: [...state.data, payload],
      };
    case ADD_DETAILS_FAILURE:
      return { ...state, isLoading: false, isError: true };

    case DELETE_DETAILS_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case DELETE_DETAILS_SUCCESS:
      const filteredData = state.data.filter((el) => el.id !== payload);
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: filteredData,
      };
    case DELETE_DETAILS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
