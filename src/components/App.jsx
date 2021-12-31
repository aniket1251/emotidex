import React, { useState } from "react";
import Entry from "./Entry";
import Search from "./search";
import emotidex from "../emotidex";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
    <h1>
      <span>emotidex</span>
    </h1>
    <Search
      placeholder="search..."
      hC={(event) => {
        setSearchTerm(event.target.value);
      }}
    />
    <dl className="dictionary">
      {emotidex
        .filter(function (val) {
          if (searchTerm === "") {
            return val;
          } else if (
            val.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
          else if (
            val.emoji.includes(searchTerm)
          ) {
            return val;
          }
        })
        .map((emojiTerm) => (
          <Entry
            key={emojiTerm.id}
            emoji={emojiTerm.emoji}
            name={emojiTerm.name}
            description={emojiTerm.meaning}
          />
        ))}
    </dl>
  </div>
  );
}

export default App;
