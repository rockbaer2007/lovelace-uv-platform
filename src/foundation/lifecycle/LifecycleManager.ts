export interface LifecycleManager<T>{
 register(item:T):void;
 unregister(id:string):boolean;
 initialize():void;
 start():void;
 stop():void;
 dispose():void;
 get(id:string):T|undefined;
 getAll():readonly T[];
}
