import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

import ResultsList from "../Components/ResultsList";
import SearchBar from "../Components/SearchBar";
import useResults from "../hooks/useResults";


export default function SearchScreen() {
  const [search, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        search={search}
        onTermSubmit={() => searchApi(search)}
        onTermChange={(newTerm) => setTerm(newTerm)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultsList
          results={filterResultsByPrice("$$")}
          title="Bit Pricier"
        />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Big Spender"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
