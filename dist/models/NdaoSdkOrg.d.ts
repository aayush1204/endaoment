/**
 * Endaoment API
 * The official Endaoment API & SDK endpoints
 *
 * The version of the OpenAPI document: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface NdaoSdkOrg
 */
export interface NdaoSdkOrg {
    /**
     * The org's Endaoment id
     * @type {string}
     * @memberof NdaoSdkOrg
     */
    id: string;
    /**
     * The org's name
     * @type {string}
     * @memberof NdaoSdkOrg
     */
    name: string;
    /**
     * The org's EIN
     * @type {string}
     * @memberof NdaoSdkOrg
     */
    ein: string;
    /**
     * The org's contract address
     * @type {string}
     * @memberof NdaoSdkOrg
     */
    contractAddress: string;
    /**
     * The org's logo url
     * @type {string}
     * @memberof NdaoSdkOrg
     */
    logoUrl: string;
    /**
     * The org's NTEE code
     * @type {string}
     * @memberof NdaoSdkOrg
     */
    nteeCode: string;
    /**
     * The org's NTEE description
     * @type {string}
     * @memberof NdaoSdkOrg
     */
    nteeDescription: string;
    /**
     * The org's description
     * @type {string}
     * @memberof NdaoSdkOrg
     */
    description: string | null;
    /**
     * The org's Endaoment url
     * @type {string}
     * @memberof NdaoSdkOrg
     */
    endaomentUrl: string;
}
/**
 * Check if a given object implements the NdaoSdkOrg interface.
 */
export declare function instanceOfNdaoSdkOrg(value: object): boolean;
export declare function NdaoSdkOrgFromJSON(json: any): NdaoSdkOrg;
export declare function NdaoSdkOrgFromJSONTyped(json: any, ignoreDiscriminator: boolean): NdaoSdkOrg;
export declare function NdaoSdkOrgToJSON(value?: NdaoSdkOrg | null): any;
