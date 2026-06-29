import { ResourceResult } from "../resources";
import { ProviderMetadata } from "./ProviderMetadata";
export interface Provider<T>{readonly metadata:ProviderMetadata;load():Promise<ResourceResult<T>>;}
