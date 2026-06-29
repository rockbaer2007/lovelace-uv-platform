import { LayoutMetadata } from "./LayoutMetadata";
import { LayoutTree } from "./LayoutTree";
export interface Layout{
 readonly metadata:LayoutMetadata;
 readonly tree:LayoutTree;
}
