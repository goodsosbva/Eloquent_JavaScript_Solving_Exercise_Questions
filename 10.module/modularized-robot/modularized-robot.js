import { roadGraph } from "./graph.js";
import { VillageState } from "./village-state.js";
import {
  randomPick,
  randomRobot,
  routeRobot,
  goalOrientedRobot,
} from "./robots.js";
import { runRobot } from "./run-robot.js";

// 테스트용 초기 상태 생성 함수
function randomState(parcelCount = 5) {
  let parcels = [];
  for (let i = 0; i < parcelCount; i++) {
    let address = randomPick(Object.keys(roadGraph));
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place == address);
    parcels.push({ place, address });
  }
  return new VillageState("Post Office", parcels);
}

// 테스트 실행
console.log("=== Random Robot ===");
let state1 = randomState();
runRobot(state1, randomRobot, []);

console.log("\n=== Route Robot ===");
let state2 = randomState();
runRobot(state2, routeRobot, []);

console.log("\n=== Goal Oriented Robot ===");
let state3 = randomState();
runRobot(state3, goalOrientedRobot, []);
