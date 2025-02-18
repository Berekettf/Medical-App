import React, { useState } from "react"; 
import { TagsInput } from "react-tag-input-component"; 

export default function StringInput(){
  const [selected, setSelected] = useState(["sergical"]);
  return (
    <div>
      <div>
      <h1>Add other specialites</h1>
      <TagsInput
        value={selected}
        onChange={setSelected}
        name="tags"
        placeHolder="+add"
      />
      </div>
    </div>
  );
};