import React, { useState, useRef } from "react";

import Nav from "../../components/browse/Nav";
import SearchResult from "../../components/search/SearchResult";
import "./Search.css";

const Search = () => {
  const [query, setQuery] = useState("");
  const [err, setErr] = useState("");
  const [active, setActive] = useState(false);

  const keywordRef = useRef();
  const genreRef = useRef();
  const yearRef = useRef();
  const mediaTypeRef = useRef();
  const languageRef = useRef();

  const handleSearch = async () => {
    if (keywordRef.current.value.trim().length === 0) {
      return setErr("Không được bỏ trống trường này!");
    }
    setErr("");
    const keywordInput = keywordRef.current.value;
    const genreInput = genreRef.current.value;
    const yearInput = yearRef.current.value;
    const mediaTypeInput = mediaTypeRef.current.value;
    const languageInput = languageRef.current.value;
    const querySearch = {
      keywordInput,
      genreInput,
      yearInput,
      mediaTypeInput,
      languageInput,
    };

    setQuery(querySearch);
  };

  const resetSearch = () => {
    setQuery("");
    keywordRef.current.value = "";
    genreRef.current.value = "";
    yearRef.current.value = "";
    mediaTypeRef.current.value = "all";
    languageRef.current.value = "en";
    // setSearchInput("");
  };

  function handleActive(e) {
    setActive(e);
  }

  return (
    <div className={active ? "active" : ""}>
      <Nav />
      <div className="s009">
        <form>
          <div className="inner-form">
            <div className="basic-search">
              <div className="input-field">
                <label htmlFor="Keywords">Keywords</label>
                <input
                  type="text"
                  placeholder="Type Keywords"
                  // onChange={(e) => setSearchInput(e.target.value)}
                  // value={searchInput}
                  ref={keywordRef}
                />
                {err && <span>{err}</span>}
                <label htmlFor="Genre">Genre</label>
                <input
                  type="text"
                  placeholder="Type Genre"
                  // onChange={(e) => setSearchInput(e.target.value)}
                  // value={searchInput}
                  ref={genreRef}
                />
                <label htmlFor="Year">Year</label>
                <input
                  type="text"
                  placeholder="Type Year"
                  // onChange={(e) => setSearchInput(e.target.value)}
                  // value={searchInput}
                  ref={yearRef}
                />
                <label htmlFor="Media Type">Media Type</label>
                <select name="media-type" id="media-type" ref={mediaTypeRef}>
                  <option value="all">All</option>
                  <option value="movie">Movie</option>
                  <option value="tv ">TV</option>
                  <option value="person">Person</option>
                </select>
                <label htmlFor="Language">Language</label>
                <select name="language" id="language" ref={languageRef}>
                  <option value="en">English</option>
                  <option value="ja">Japanese</option>
                  <option value="ko ">Korean</option>
                </select>
              </div>
            </div>
            <div className="advance-search">
              <div className="row third">
                <div className="input-field">
                  <div className="result-count"></div>
                  <div className="group-btn">
                    <button
                      className="btn-delete"
                      onClick={resetSearch}
                      type="button"
                    >
                      RESET
                    </button>
                    <button
                      className="btn-search"
                      type="button"
                      onClick={() => handleSearch()}
                    >
                      SEARCH
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <SearchResult query={query} onSetActive={handleActive} />
    </div>
  );
};

export default Search;
