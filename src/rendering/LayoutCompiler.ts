import { LayoutTree } from "../layouts/LayoutTree";
import { RenderTree } from "./RenderTree";

export interface LayoutCompiler{
  compile(layout:LayoutTree):RenderTree;
}
