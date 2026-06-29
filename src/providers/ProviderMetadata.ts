import { Described,Named,Versioned } from "../shared/contracts";
export interface ProviderMetadata extends Named,Versioned,Described{readonly id:string;readonly author:string;}
