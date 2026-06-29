import { LayoutNode } from "./LayoutNode";
export interface LayoutComponent extends LayoutNode{
 readonly properties:Readonly<Record<string,unknown>>;
}
