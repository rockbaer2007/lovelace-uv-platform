import { EventBus } from "../../events";
import { Registry, RegistryItem } from "../../registry";

export interface Context{
 readonly registry:Registry<RegistryItem>;
 readonly eventBus:EventBus;
}
