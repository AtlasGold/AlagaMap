import React, { useState } from "react";
import Context from "./Context";
import { theme } from "../utils";

export default function ContextWrapper(props: any) {
  const [rooms, setRooms]: any = useState([]);
  const [unfilteredRooms, setUnfilteredRooms]: any = useState([]);
  return (
    <Context.Provider
      value={{ theme, rooms, setRooms, unfilteredRooms, setUnfilteredRooms }}
    >
      {props.children}
    </Context.Provider>
  );
}
