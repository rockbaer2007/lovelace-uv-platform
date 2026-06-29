import { Context } from "./Context";
import { EventBus } from "../../events";
import { Registry, RegistryItem } from "../../registry";

export class PlatformContext implements Context{
 constructor(
   public readonly registry:Registry<RegistryItem>,
   public readonly eventBus:EventBus
 ){}
}
