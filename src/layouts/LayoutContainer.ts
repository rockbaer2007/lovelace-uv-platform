import { LayoutNode } from "./LayoutNode";
export interface LayoutContainer extends LayoutNode{
 readonly orientation:"horizontal"|"vertical";
 readonly spacing?:number;
 readonly padding?:number;
}
