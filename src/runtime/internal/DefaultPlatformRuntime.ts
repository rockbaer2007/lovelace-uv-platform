import { PlatformRuntime } from "../PlatformRuntime";
import { RuntimeResult } from "../RuntimeResult";

export class DefaultPlatformRuntime implements PlatformRuntime{

  public execute():RuntimeResult<string>{
    return {
      success:true,
      value:"Vertical Slice executed successfully."
    };
  }

}
