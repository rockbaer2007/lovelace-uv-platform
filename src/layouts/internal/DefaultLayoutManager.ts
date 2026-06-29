import { Registry } from "../../registry";
import { PlatformServices } from "../../core/PlatformServices";
import { Layout } from "../Layout";
import { LayoutManager } from "../LayoutManager";
import { PlatformLayoutContext } from "./PlatformLayoutContext";
export class DefaultLayoutManager implements LayoutManager{
 private readonly layouts=new Registry<Layout>(l=>l.metadata.id);
 private readonly context:PlatformLayoutContext;
 constructor(s:PlatformServices){this.context=new PlatformLayoutContext(s.registry,s.eventBus);}
 register(l:Layout){this.layouts.register(l);}
 unregister(id:string){return this.layouts.unregister(id);}
 get(id:string){return this.layouts.get(id);}
 getAll(){return this.layouts.getAll();}
 initialize(){} start(){} stop(){} dispose(){}
}
