import { useState, useEffect, useId } from "react";
import styles from "./SearchBar.module.css";
import { useSearch } from "../hooks/useSearch";
import { Link } from "react-router";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [{ results, isLoading }] = useSearch(debouncedQuery);
  const inputId = useId();

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query.trim());
    }, 500);

    return () => clearTimeout(handler);
  }, [query]);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    setIsFocus(true);
    setQuery(e.target.value);
  }

  const shouldShowSuggestions = isFocus && debouncedQuery.length >= 3;

  return (
    <div className={styles.suggestionSearch}>
      <form onSubmit={handleSubmit} role="search" aria-label="Food search">
        <label htmlFor={inputId} className={styles.visuallyHidden}>
          Search for food
        </label>
        <input
          id={inputId}
          className={styles.searchBar}
          type="search"
          placeholder="🔍 Pizza, Burger, Chinese..."
          onChange={handleChange}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setTimeout(() => setIsFocus(false), 200)}
          value={query}
          autoComplete="off"
          aria-autocomplete="list"
          aria-expanded={shouldShowSuggestions}
          aria-controls={shouldShowSuggestions ? "search-results" : undefined}
        />
      </form>

      {shouldShowSuggestions && (
        <>
          {isLoading ? (
            <div className={styles.loader} aria-live="polite">
              Loading...
            </div>
          ) : results.length > 0 ? (
            <ul
              id="search-results"
              className={`${styles.resultSuggestion} ${
                results.length > 5 ? styles.scroll : ""
              }`}
              role="listbox"
            >
              {results.map((result) => (
                <li key={result.id} role="option">
                  <Link
                    to={`/app/foodinfo?id=${result.id}`}
                    className={styles.suggestion}
                  >
                    <span className={styles.name}>{result.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className={styles.noSuggestion} aria-live="polite">
              ☹️ No Suggestions
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default SearchBar;
