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
exports.NdaoSdkTransactionToJSON = exports.NdaoSdkTransactionFromJSONTyped = exports.NdaoSdkTransactionFromJSON = exports.instanceOfNdaoSdkTransaction = void 0;
/**
 * Check if a given object implements the NdaoSdkTransaction interface.
 */
function instanceOfNdaoSdkTransaction(value) {
    var isInstance = true;
    isInstance = isInstance && "to" in value;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "value" in value;
    return isInstance;
}
exports.instanceOfNdaoSdkTransaction = instanceOfNdaoSdkTransaction;
function NdaoSdkTransactionFromJSON(json) {
    return NdaoSdkTransactionFromJSONTyped(json, false);
}
exports.NdaoSdkTransactionFromJSON = NdaoSdkTransactionFromJSON;
function NdaoSdkTransactionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'to': json['to'],
        'data': json['data'],
        'value': json['value'],
    };
}
exports.NdaoSdkTransactionFromJSONTyped = NdaoSdkTransactionFromJSONTyped;
function NdaoSdkTransactionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'to': value.to,
        'data': value.data,
        'value': value.value,
    };
}
exports.NdaoSdkTransactionToJSON = NdaoSdkTransactionToJSON;
