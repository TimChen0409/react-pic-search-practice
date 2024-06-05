import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "../components/Search";
import Picture from "../components/Picture";

const Home = () => {
  let [input, setInput] = useState("");
  let [data, setData] = useState([]);
  let [page, setPage] = useState(1);
  let [currentSearch, setCurrentSearch] = useState("");

  const auth = process.env.REACT_APP_PexelsAPIKey;
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  let searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;

  const search = async (url) => {
    if (input === "" && url === searchURL) {
      alert("Please enter search keyword.");
      return;
    }
    let result = await axios.get(url, {
      headers: { Authorization: auth },
    });
    setData(result.data.photos);
    setCurrentSearch(input);
  };

  const morePicture = async () => {
    let newURL;
    console.log("1.page state is:" + page);
    setPage(page + 1); // page state will not be updated immediately because of Closure
    console.log("2.page state is:" + page);
    if (currentSearch === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${page + 1}&per_page=15`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=${
        page + 1
      }`;
    }
    console.log(newURL);
    let result = await axios.get(newURL, {
      headers: { Authorization: auth },
    });
    setData(data.concat(result.data.photos));
  };

  useEffect(() => {
    search(initialURL);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={() => {
          search(searchURL);
        }}
        setInput={setInput}
      />
      <div className="pictures">
        {data.map((p) => {
          return <Picture key={p.id} data={p} />;
        })}
      </div>
      <div className="morePicture">
        <button onClick={morePicture}>More...</button>
      </div>
    </div>
  );
};

export default Home;
