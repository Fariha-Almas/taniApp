import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import WheatherInfo from "./WheatherInfo";
import WheatherSider from "./WheatherSider";

export default function Card() {
  const [response, setResponse] = useState({});
  const [search, setSearch] = useState("paris");

  useEffect(() => {
    axios
      .post(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=7bb146e83da9de119d8e785fdd490228`
      )
      .then((res) => {
        setResponse(res.data);
        console.log("res", res);
      })
      .catch((err) => console.log("error", err));
  }, [search]);

  const { weather = [] } = response;
  const { description = "" } = weather[0] || [];
  console.log("response", response.name);
  console.log("0 index", description);
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "lightblue",
        }}
      >
        <WheatherSider data={response} description={description} />
        <WheatherInfo setSearch={setSearch} search={search} />
      </div>
    </div>
  );
}
