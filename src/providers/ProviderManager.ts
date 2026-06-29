import { Provider } from "./Provider";
export interface ProviderManager{register(provider:Provider<unknown>):void;unregister(id:string):boolean;initialize():void;start():void;stop():void;dispose():void;get(id:string):Provider<unknown>|undefined;getAll():readonly Provider<unknown>[];}
