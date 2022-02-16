import React from "react";

export default function WheatherInfo({ setSearch, search }) {
  return (
    <div
      style={{
        width: "500px",
        backgroundColor: "red",
        padding: "30px",
      }}
    >
      <p>drtf gyg ygyguygygyugyug </p>
      <input
        type="search"
        value={search}
        name="searchInput"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        style={{
          width: "350px",
          height: "40px",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <p>max temp</p>
          <p>min temp</p>
          <p>humidity</p>
        </div>
        <div>
          <p>567.8</p>
          <p>67,9</p>
          <p>78</p>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "green",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          style={{ width: "18%" }}
          src="http://openweathermap.org/img/wn/01n@2x.png"
        />
        <p>677</p>
        <p>678</p>
      </div>
    </div>
  );
}
