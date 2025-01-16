"use client";
import { useState, useCallback } from "react";

interface FetchOptions {
  method?: string;
  headers?: HeadersInit;
  body?: BodyInit | null;
}

interface FetchState<T> {
  data: T | null;
  status: number | null;
  error: string | null;
  loading: boolean;
}

function useFetch<T>() {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    status: null,
    error: null,
    loading: false,
  });

  const fetchData = useCallback(
    async (url: string, reqOptions?: FetchOptions, cb?: () => void) => {
      setState((prevState) => ({ ...prevState, loading: true }));
      try {
        const response = await fetch(url, { ...reqOptions });
        const data = await response.json();

        setState({
          data: data.data,
          status: response.status,
          error: null,
          loading: false,
        });
      } catch (error) {
        setState({
          data: null,
          status: null,
          error: (error as Error).message,
          loading: false,
        });
      } finally {
        cb && cb();
      }
    },
    []
  );

  return { state, fetchData };
}

export default useFetch;
