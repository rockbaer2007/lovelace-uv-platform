import { Described,Named,Versioned } from "../shared/contracts";
export interface LayoutMetadata extends Named,Versioned,Described{
 readonly id:string;
 readonly author:string;
}
