export interface LayoutNode{
 readonly id:string;
 readonly type:string;
 readonly children:readonly LayoutNode[];
}
