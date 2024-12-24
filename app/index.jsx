import { useEffect, useState } from "react";
import { Button, Text, TouchableHighlight, View } from "react-native";
import gzip_response2json from "../util/gzip_response2json";
import { parse } from "@/util/parse";

export default function Index() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const gzip = await fetch("/testdata.json.gz");
      const d = await gzip_response2json(gzip);
      setData(d.slice(1).map((dd) => parse(dd)));
    })();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableHighlight>
        <>
          {data.map((d) => {
            return (
              <Text key={d.ncode}>
                <Button title={d.title} />
              </Text>
            );
          })}
        </>
      </TouchableHighlight>
    </View>
  );
}
