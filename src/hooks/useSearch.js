import { useEffect, useReducer } from "react";

const BASE_URL = `https://forkify-api.jonas.io/api/v2/recipes`;
const API_KEY = `c7765a14-df6e-4ad4-b3dd-51d22d987b5b`;

const initialState = {
  results: [],
  isLoading: false,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "success":
      return { ...state, results: action.payload, isLoading: false };
    case "error":
      return { ...initialState, error: action.payload };
    default:
      initialState;
  }
}

function useSearch(query) {
  const [{ results, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    if (!query) return;

    const controller = new AbortController();
    dispatch({ type: "loading" });
    const timer = setTimeout(() => {
      async function fetchQueryData() {
        try {
          const res = await fetch(
            `${BASE_URL}?search=${query}&key=${API_KEY}`,
            {
              signal: controller.signal,
            }
          );
          if (!res.ok) throw new Error("Error Occured");

          const data = await res.json();
          dispatch({ type: "success", payload: data?.data?.recipes });
        } catch (err) {
          if (err.name !== "AbortError") {
            dispatch({ type: "error", payload: err.message });
          }
        }
      }

      fetchQueryData();
    }, 500);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query]);

  return [{ results, isLoading, error }, dispatch];
}

export { useSearch };
