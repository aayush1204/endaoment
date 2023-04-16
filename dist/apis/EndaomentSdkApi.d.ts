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
import * as runtime from '../runtime';
import type { NdaoSdkDonationSwap, NdaoSdkFund, NdaoSdkOrg, NdaoSdkTransaction } from '../models';
export interface GetDeployedOrgsRequest {
    count?: number;
    offset?: number;
}
export interface GetDonationSwapTransactionRequest {
    ein: string;
    amountIn: string;
    tokenContractAddress?: string;
}
export interface GetOrgDeployTransactionRequest {
    ein: string;
}
export interface GetVisibleFundsRequest {
    count?: number;
    offset?: number;
}
export interface SearchOrgsRequest {
    searchTerm?: string;
    nteeMajorCodes?: string;
    nteeMinorCodes?: string;
    deployedStatus?: SearchOrgsDeployedStatusEnum;
    count?: number;
    offset?: number;
}
export interface SearchVisibleFundsRequest {
    name: string;
    count?: number;
    offset?: number;
}
/**
 *
 */
export declare class EndaomentSdkApi extends runtime.BaseAPI {
    /**
     * Only organizations that already have a deployed contract on Endaoment will be returned
     * Get a list of deployed Org contracts
     */
    getDeployedOrgsRaw(requestParameters: GetDeployedOrgsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<NdaoSdkOrg>>>;
    /**
     * Only organizations that already have a deployed contract on Endaoment will be returned
     * Get a list of deployed Org contracts
     */
    getDeployedOrgs(requestParameters?: GetDeployedOrgsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<NdaoSdkOrg>>;
    /**
     * Get the transaction information required to swap and donate a given token amount to an org
     */
    getDonationSwapTransactionRaw(requestParameters: GetDonationSwapTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NdaoSdkDonationSwap>>;
    /**
     * Get the transaction information required to swap and donate a given token amount to an org
     */
    getDonationSwapTransaction(requestParameters: GetDonationSwapTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NdaoSdkDonationSwap>;
    /**
     * Get the transaction information required to deploy a given org
     */
    getOrgDeployTransactionRaw(requestParameters: GetOrgDeployTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NdaoSdkTransaction>>;
    /**
     * Get the transaction information required to deploy a given org
     */
    getOrgDeployTransaction(requestParameters: GetOrgDeployTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NdaoSdkTransaction>;
    /**
     * Only community and transparent funds will be returned
     * Get a list of Endaoment funds
     */
    getVisibleFundsRaw(requestParameters: GetVisibleFundsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<NdaoSdkFund>>>;
    /**
     * Only community and transparent funds will be returned
     * Get a list of Endaoment funds
     */
    getVisibleFunds(requestParameters?: GetVisibleFundsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<NdaoSdkFund>>;
    /**
     * Note: If using multiple parameters, the search will perform an AND operation of all inputs
     * Get a list of Endaoment Orgs, filtered by search parameters
     */
    searchOrgsRaw(requestParameters: SearchOrgsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<NdaoSdkOrg>>>;
    /**
     * Note: If using multiple parameters, the search will perform an AND operation of all inputs
     * Get a list of Endaoment Orgs, filtered by search parameters
     */
    searchOrgs(requestParameters?: SearchOrgsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<NdaoSdkOrg>>;
    /**
     * Only community and transparent funds will be returned
     * Get a list of Endaoment Funds, filtered by search parameter
     */
    searchVisibleFundsRaw(requestParameters: SearchVisibleFundsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<NdaoSdkFund>>>;
    /**
     * Only community and transparent funds will be returned
     * Get a list of Endaoment Funds, filtered by search parameter
     */
    searchVisibleFunds(requestParameters: SearchVisibleFundsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<NdaoSdkFund>>;
}
/**
 * @export
 */
export declare const SearchOrgsDeployedStatusEnum: {
    readonly Deployed: "deployed";
    readonly Undeployed: "undeployed";
    readonly All: "all";
};
export type SearchOrgsDeployedStatusEnum = typeof SearchOrgsDeployedStatusEnum[keyof typeof SearchOrgsDeployedStatusEnum];