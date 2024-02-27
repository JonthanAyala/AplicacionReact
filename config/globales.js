import { React, useState } from "react";

export const Globales = () =>{
    const [global, setGlobal] = useState("Soy una variable global");
    return {global, setGlobal};
}