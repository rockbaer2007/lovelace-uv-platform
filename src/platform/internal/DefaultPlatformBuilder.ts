import { Platform } from "../Platform";
import { PlatformBuilder } from "../PlatformBuilder";
import { PlatformConfiguration } from "../PlatformConfiguration";
import { DefaultPlatform } from "./DefaultPlatform";

export class DefaultPlatformBuilder implements PlatformBuilder{

  public constructor(
    private readonly configuration: PlatformConfiguration
  ){}

  public plugins(...plugins:string[]):PlatformBuilder{
    return new DefaultPlatformBuilder({
      ...this.configuration,
      plugins:[...this.configuration.plugins,...plugins]
    });
  }

  public providers(...providers:string[]):PlatformBuilder{
    return new DefaultPlatformBuilder({
      ...this.configuration,
      providers:[...this.configuration.providers,...providers]
    });
  }

  public layouts(...layouts:string[]):PlatformBuilder{
    return new DefaultPlatformBuilder({
      ...this.configuration,
      layouts:[...this.configuration.layouts,...layouts]
    });
  }

  public themes(...themes:string[]):PlatformBuilder{
    return new DefaultPlatformBuilder({
      ...this.configuration,
      themes:[...this.configuration.themes,...themes]
    });
  }

  public build():Platform{
    return new DefaultPlatform();
  }
}
