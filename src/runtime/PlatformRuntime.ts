import { RuntimeResult } from "./RuntimeResult";

export interface PlatformRuntime{
  execute():RuntimeResult;
}
