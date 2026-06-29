import { Registry } from "../../registry";
import { Renderer } from "../Renderer";
import { RendererManager } from "../RendererManager";

export class DefaultRendererManager implements RendererManager{
  private readonly registry=new Registry<Renderer>(()=>"default");
  register(r:Renderer){this.registry.register(r);}
  unregister(id:string){return this.registry.unregister(id);}
  get(id:string){return this.registry.get(id);}
  getAll(){return this.registry.getAll();}
  initialize(){} start(){} stop(){} dispose(){}
}
