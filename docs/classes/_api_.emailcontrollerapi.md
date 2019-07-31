[mailslurp-swagger-sdk-ts](../README.md) > ["api"](../modules/_api_.md) > [EmailControllerApi](../classes/_api_.emailcontrollerapi.md)

# Class: EmailControllerApi

EmailControllerApi - object-oriented interface

*__export__*: 

*__class__*: EmailControllerApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](_api_.baseapi.md)

**↳ EmailControllerApi**

## Index

### Constructors

* [constructor](_api_.emailcontrollerapi.md#constructor)

### Properties

* [basePath](_api_.emailcontrollerapi.md#basepath)
* [configuration](_api_.emailcontrollerapi.md#configuration)
* [fetch](_api_.emailcontrollerapi.md#fetch)

### Methods

* [deleteEmailUsingDELETE](_api_.emailcontrollerapi.md#deleteemailusingdelete)
* [getEmailAnalyticsUsingGET](_api_.emailcontrollerapi.md#getemailanalyticsusingget)
* [getEmailUsingGET](_api_.emailcontrollerapi.md#getemailusingget)
* [getRawEmailUsingGET](_api_.emailcontrollerapi.md#getrawemailusingget)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new EmailControllerApi**(configuration?: *`Configuration`*, basePath?: *`string`*, fetch?: *[FetchAPI](../interfaces/_api_.fetchapi.md)*): [EmailControllerApi](_api_.emailcontrollerapi.md)

*Inherited from [BaseAPI](_api_.baseapi.md).[constructor](_api_.baseapi.md#constructor)*

*Defined in api.ts:58*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | `Configuration` | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` fetch | [FetchAPI](../interfaces/_api_.fetchapi.md) |  portableFetch |

**Returns:** [EmailControllerApi](_api_.emailcontrollerapi.md)

___

## Properties

<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Inherited from [BaseAPI](_api_.baseapi.md).[basePath](_api_.baseapi.md#basepath)*

*Defined in api.ts:60*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *`Configuration`*

*Inherited from [BaseAPI](_api_.baseapi.md).[configuration](_api_.baseapi.md#configuration)*

*Defined in api.ts:58*

___
<a id="fetch"></a>

### `<Protected>` fetch

**● fetch**: *[FetchAPI](../interfaces/_api_.fetchapi.md)*

*Inherited from [BaseAPI](_api_.baseapi.md).[fetch](_api_.baseapi.md#fetch)*

*Defined in api.ts:60*

___

## Methods

<a id="deleteemailusingdelete"></a>

###  deleteEmailUsingDELETE

▸ **deleteEmailUsingDELETE**(emailId: *`string`*, options?: *`any`*): `Promise`<`Response`>

*Defined in api.ts:1174*

Deletes an email and removes it from the inbox

*__summary__*: Delete Email

*__throws__*: {RequiredError}

*__memberof__*: EmailControllerApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| emailId | `string` |  emailId |
| `Optional` options | `any` |

**Returns:** `Promise`<`Response`>

___
<a id="getemailanalyticsusingget"></a>

###  getEmailAnalyticsUsingGET

▸ **getEmailAnalyticsUsingGET**(emailId: *`string`*, options?: *`any`*): `Promise`<[EmailAnalytics](../interfaces/_api_.emailanalytics.md)>

*Defined in api.ts:1186*

Returns a spam analysis on a given email

*__summary__*: Get Email Analytics

*__throws__*: {RequiredError}

*__memberof__*: EmailControllerApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| emailId | `string` |  emailId |
| `Optional` options | `any` |

**Returns:** `Promise`<[EmailAnalytics](../interfaces/_api_.emailanalytics.md)>

___
<a id="getemailusingget"></a>

###  getEmailUsingGET

▸ **getEmailUsingGET**(emailId: *`string`*, options?: *`any`*): `Promise`<[Email](../interfaces/_api_.email.md)>

*Defined in api.ts:1198*

Returns a email summary object with headers and content. To retrieve the raw unparsed email use the getRawMessage endpoint

*__summary__*: Get Email Content

*__throws__*: {RequiredError}

*__memberof__*: EmailControllerApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| emailId | `string` |  emailId |
| `Optional` options | `any` |

**Returns:** `Promise`<[Email](../interfaces/_api_.email.md)>

___
<a id="getrawemailusingget"></a>

###  getRawEmailUsingGET

▸ **getRawEmailUsingGET**(emailId: *`string`*, options?: *`any`*): `Promise`<`string`>

*Defined in api.ts:1210*

Returns a raw, unparsed and unprocessed email

*__summary__*: Get Raw Email Content

*__throws__*: {RequiredError}

*__memberof__*: EmailControllerApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| emailId | `string` |  emailId |
| `Optional` options | `any` |

**Returns:** `Promise`<`string`>

___

