export interface RuntimeResult<T=unknown>{
  readonly success:boolean;
  readonly value?:T;
  readonly error?:unknown;
}
