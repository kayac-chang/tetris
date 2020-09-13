import { all, filter, complement, until, length, gte, prepend } from "ramda";
import { fill } from "../utils";
import { State } from "./types";

const notFillout = complement(all(Boolean));
const len20 = (x: any[]) => gte(length(x), 20);
const fillTo20 = until(len20, prepend(fill(10, 0)));

export default function UpdatePlayFieldSystem() {
  return (delta: number, state: State) => {
    if (!state.current || !state.current.lock) {
      return state;
    }

    const { playfield, current, clearLines } = state;
    const { blocks, rotate, position, color } = current;

    blocks[rotate].forEach((row, py) => {
      row.forEach((exist, px) => {
        if (exist) playfield[py + position.y][px + position.x] = color;
      });
    });

    const rest = filter(notFillout)(playfield);
    const clear = playfield.length - rest.length;

    return {
      ...state,
      playfield: fillTo20(rest),
      clearLines: clear ? [...clearLines, clear] : clearLines,
    };
  };
}
