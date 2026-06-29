export interface RenderNode{
  readonly id:string;
  readonly type:string;
  readonly properties:Readonly<Record<string,unknown>>;
  readonly children:readonly RenderNode[];
}
