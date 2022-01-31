import React from "react";
import MesaVerde from "./parks/impor MesaVerde";
import { trees, wildlife } from "./parks/RockyMountain";
import * as RMFunctions from "./parks/RockyMountain";
import {
  trees as parkTrees,
  wildlife as parkWildlife,
} from "./parks/RockyMountain";

 export default function ColoradoStateParks() {
  return (
    <div>
      <MesaVerde />
    </div>
  )

}

export default ColoradoStateParks;

console.log(trees);

wildlife();

console.log(RMFunctions.trees);
RMFunctions.wildlife();
RMFunctions.elevation();

console.log(parkTrees);
parkWildlife();