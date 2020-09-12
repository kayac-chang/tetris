import { Application } from "pixi.js";
import SystemManager from "./systems/Manager";
import RenderSystem from "./systems/Render";
import SpawnTetrominoSystem from "./systems/SpawnTetromino";
import DropTetrominoSystem from "./systems/DropTetromino";
import MoveTetrominoSystem from "./systems/MoveTetromino";
import PlayField from "./models/playfield";
import throttle from "./systems/throttle";
import UpdatePlayFieldSystem from "./systems/UpdatePlayField";
import ControlSystem from "./systems/Control";

export default function main(app: Application) {
  const systems = SystemManager(app, {
    playfield: PlayField(),
    tetrominos: [],
    current: undefined,
  });

  systems.add(throttle(80, ControlSystem()));
  systems.add(SpawnTetrominoSystem());
  systems.add(throttle(1000, DropTetrominoSystem()));
  systems.add(MoveTetrominoSystem());
  systems.add(UpdatePlayFieldSystem());
  systems.add(RenderSystem(app));
}
