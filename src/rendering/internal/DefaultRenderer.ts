import { Renderer } from "../Renderer";
import { RenderResult } from "../RenderResult";
import { RenderTree } from "../RenderTree";

export class DefaultRenderer implements Renderer{
  public render(tree:RenderTree):RenderResult<RenderTree>{
    return {output:tree};
  }
}
