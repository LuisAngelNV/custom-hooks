import { useEffect, useState } from "react";


const localCache = {};
export const useFecth = (url) => {
  const [state, setstate] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  useEffect(() => {
    getFetch();
  }, [url]);

const setLoadingState = () => {
  setstate({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });
};

  const getFetch = async () => {

    if (localCache[url]) {
      console.log("cache");
      setstate({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        error: null,
      })
      return
    }
    setLoadingState();
    const resp = await fetch(url);

    // sleep de 2 segundos
    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (!resp.ok) {
      setstate({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: resp.status,
          message: data.message,
        },
      });
      return;
    }

    const data = await resp.json();

    setstate({
      data,
      isLoading: false,
      hasError: false,
      error: null,
    });

localCache[url] = data;  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
