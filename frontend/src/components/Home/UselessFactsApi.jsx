import { useState, useEffect } from "react";
import axios from "axios";

function UselessFactsApi() {
  const [fact, setFact] = useState("");

  useEffect(() => {
    axios
      .get("https://meowfacts.herokuapp.com/?lang=fra")
      .then((res) => setFact(res.data.data))
      .catch((err) => console.error(err));
  }, []);
  return <p id="facts">{fact}</p>;
}

export default UselessFactsApi;
