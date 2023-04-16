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
 * @interface NdaoSdkFund
 */
export interface NdaoSdkFund {
    /**
     * The fund's Endaoment id
     * @type {string}
     * @memberof NdaoSdkFund
     */
    id: string;
    /**
     * The fund's name
     * @type {string}
     * @memberof NdaoSdkFund
     */
    name: string;
    /**
     * The fund's contract address
     * @type {string}
     * @memberof NdaoSdkFund
     */
    contractAddress: string;
    /**
     * The fund's logo url
     * @type {string}
     * @memberof NdaoSdkFund
     */
    logoUrl: string | null;
    /**
     * The fund's description
     * @type {string}
     * @memberof NdaoSdkFund
     */
    description: string;
    /**
     * The fund's Endaoment url
     * @type {string}
     * @memberof NdaoSdkFund
     */
    endaomentUrl: string;
}
/**
 * Check if a given object implements the NdaoSdkFund interface.
 */
export declare function instanceOfNdaoSdkFund(value: object): boolean;
export declare function NdaoSdkFundFromJSON(json: any): NdaoSdkFund;
export declare function NdaoSdkFundFromJSONTyped(json: any, ignoreDiscriminator: boolean): NdaoSdkFund;
export declare function NdaoSdkFundToJSON(value?: NdaoSdkFund | null): any;