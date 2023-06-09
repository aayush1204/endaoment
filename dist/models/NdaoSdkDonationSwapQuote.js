"use strict";
/* tslint:disable */
/* eslint-disable */
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NdaoSdkDonationSwapQuoteToJSON = exports.NdaoSdkDonationSwapQuoteFromJSONTyped = exports.NdaoSdkDonationSwapQuoteFromJSON = exports.instanceOfNdaoSdkDonationSwapQuote = void 0;
/**
 * Check if a given object implements the NdaoSdkDonationSwapQuote interface.
 */
function instanceOfNdaoSdkDonationSwapQuote(value) {
    var isInstance = true;
    isInstance = isInstance && "priceImpact" in value;
    isInstance = isInstance && "expectedUsdc" in value;
    isInstance = isInstance && "minimumTolerableUsdc" in value;
    return isInstance;
}
exports.instanceOfNdaoSdkDonationSwapQuote = instanceOfNdaoSdkDonationSwapQuote;
function NdaoSdkDonationSwapQuoteFromJSON(json) {
    return NdaoSdkDonationSwapQuoteFromJSONTyped(json, false);
}
exports.NdaoSdkDonationSwapQuoteFromJSON = NdaoSdkDonationSwapQuoteFromJSON;
function NdaoSdkDonationSwapQuoteFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'priceImpact': json['priceImpact'],
        'expectedUsdc': json['expectedUsdc'],
        'minimumTolerableUsdc': json['minimumTolerableUsdc'],
    };
}
exports.NdaoSdkDonationSwapQuoteFromJSONTyped = NdaoSdkDonationSwapQuoteFromJSONTyped;
function NdaoSdkDonationSwapQuoteToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'priceImpact': value.priceImpact,
        'expectedUsdc': value.expectedUsdc,
        'minimumTolerableUsdc': value.minimumTolerableUsdc,
    };
}
exports.NdaoSdkDonationSwapQuoteToJSON = NdaoSdkDonationSwapQuoteToJSON;
