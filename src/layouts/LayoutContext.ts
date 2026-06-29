import { EventBus } from "../events";
import { Registry,RegistryItem } from "../registry";
export interface LayoutContext{
 readonly registry:Registry<RegistryItem>;
 readonly eventBus:EventBus;
}
