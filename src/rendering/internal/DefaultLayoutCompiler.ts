import { LayoutCompiler } from "../LayoutCompiler";
import { RenderTree } from "../RenderTree";
import { LayoutTree } from "../../layouts/LayoutTree";

export class DefaultLayoutCompiler implements LayoutCompiler{
  public compile(layout:LayoutTree):RenderTree{
    return {root:layout.root as any};
  }
}
