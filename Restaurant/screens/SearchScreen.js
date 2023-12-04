import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import useResult from "../hooks/useResult";
import ResultsList from "../components/ResultsList";

export default function SearchScreen() {
  const [searchApi, results, errorMessage] = useResult();
  const [term, setTerm] = useState("");
  // console.log(results);

  const filterResultsByPrice = (price) => {
    return results.filter((result) => result.price === price);
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? (
        <Text
          style={{
            alignSelf: "center",
            color: "red",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {errorMessage}
        </Text>
      ) : (
        <>
          {results.length == 0 ? (
            <Text
              style={{
                alignSelf: "center",
                color: "red",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Restoran Bulunamadı
            </Text>
          ) : (
            <>
              <ResultsList
                title="Ucuz Restoranlar"
                results={filterResultsByPrice("₺")}
              />
              <ResultsList
                title="Uygun Restoranlar"
                results={filterResultsByPrice("₺₺")}
              />
              <ResultsList
                title="Pahalı Restoranlar"
                results={filterResultsByPrice("₺₺₺")}
              />
            </>
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
