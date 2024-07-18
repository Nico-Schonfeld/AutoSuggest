"use client";
import AutoSuggest from "@/component/AutoSuggest";
import React from "react";

const PageClient = () => {
  const [search, setSearch] = React.useState<string>("");
  const [results, setResults] = React.useState<string[]>([]);
  const names = ["Pepe", "Juan", "Lucas", "Pedro"];

  const useDebounce = (value: string, delay: number) => {
    const [debouncedValue, setDebouncedValue] = React.useState<string>(value);
    React.useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);
    return debouncedValue;
  };

  const debounced = useDebounce(search, 100);

  const handleSearch = (e: any) => setSearch(e.target.value);

  React.useEffect(() => {
    setResults(
      names.filter(
        (n) => search === "" || n.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [debounced, search]);

  return (
    <AutoSuggest search={search} onSearch={handleSearch} results={results} />
  );
};

export default PageClient;
