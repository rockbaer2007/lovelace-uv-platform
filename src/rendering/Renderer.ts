import { RenderTree } from "./RenderTree";
import { RenderResult } from "./RenderResult";

export interface Renderer{
  render(tree:RenderTree):RenderResult;
}
