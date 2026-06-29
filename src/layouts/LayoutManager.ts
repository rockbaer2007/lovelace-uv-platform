import { Layout } from "./Layout";
export interface LayoutManager{
 register(layout:Layout):void;
 unregister(id:string):boolean;
 initialize():void;
 start():void;
 stop():void;
 dispose():void;
 get(id:string):Layout|undefined;
 getAll():readonly Layout[];
}
