/**
 * Can be initialized.
 */
export interface Initializable {
    initialize(...args: readonly unknown[]): void;
}
