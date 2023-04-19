import { useState, useEffect } from "react";
import axios from "axios";

function UselessFactsApi() {
  const [fact, setFact] = useState("");

  useEffect(() => {
    axios
      .get("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en")
      .then((res) => setFact(res.data.text))
      .catch((err) => console.error(err));
  }, []);
  return <p id="facts">{fact}</p>;
}

export default UselessFactsApi;
