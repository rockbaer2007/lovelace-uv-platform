import { EventBus } from "../../events";
import { Registry,RegistryItem } from "../../registry";
import { LayoutContext } from "../LayoutContext";
export class PlatformLayoutContext implements LayoutContext{
 constructor(public readonly registry:Registry<RegistryItem>,public readonly eventBus:EventBus){}
}
