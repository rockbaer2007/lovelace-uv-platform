/**
 * Describes a platform plugin.
 *
 * Public API
 * Stability: Experimental
 */
export interface PluginMetadata {

    /**
     * Unique plugin identifier.
     */
    readonly id: string;

    /**
     * Human-readable plugin name.
     */
    readonly name: string;

    /**
     * Plugin version (Semantic Versioning).
     */
    readonly version: string;

    /**
     * Supported Platform API version.
     */
    readonly apiVersion: string;

    /**
     * Plugin author.
     */
    readonly author: string;

    /**
     * Optional plugin description.
     */
    readonly description?: string;

    /**
     * Optional homepage.
     */
    readonly homepage?: string;

    /**
     * Optional repository URL.
     */
    readonly repository?: string;

}