import { EventBus } from "../events";
import { Registry,RegistryItem } from "../registry";
export interface ProviderContext{readonly registry:Registry<RegistryItem>;readonly eventBus:EventBus;}
