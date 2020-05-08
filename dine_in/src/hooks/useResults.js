import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";


export default function useResults() {

  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  
  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something Went Wrong");
    }
  };
  // call search api when component is first rendered
  useEffect(()=> {
        searchApi('pasta')
  }, [])
    return [searchApi, results, errorMessage]
}
