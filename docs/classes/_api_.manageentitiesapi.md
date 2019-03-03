[mailslurp-swagger-sdk-ts](../README.md) > ["api"](../modules/_api_.md) > [ManageEntitiesApi](../classes/_api_.manageentitiesapi.md)

# Class: ManageEntitiesApi

ManageEntitiesApi - object-oriented interface

*__export__*: 

*__class__*: ManageEntitiesApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](_api_.baseapi.md)

**↳ ManageEntitiesApi**

## Index

### Constructors

* [constructor](_api_.manageentitiesapi.md#constructor)

### Properties

* [basePath](_api_.manageentitiesapi.md#basepath)
* [configuration](_api_.manageentitiesapi.md#configuration)
* [fetch](_api_.manageentitiesapi.md#fetch)

### Methods

* [deleteInboxUsingDELETE](_api_.manageentitiesapi.md#deleteinboxusingdelete)
* [deleteMessageUsingDELETE](_api_.manageentitiesapi.md#deletemessageusingdelete)
* [getInboxUsingGET](_api_.manageentitiesapi.md#getinboxusingget)
* [getInboxesUsingGET](_api_.manageentitiesapi.md#getinboxesusingget)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ManageEntitiesApi**(configuration?: *`Configuration`*, basePath?: *`string`*, fetch?: *[FetchAPI](../interfaces/_api_.fetchapi.md)*): [ManageEntitiesApi](_api_.manageentitiesapi.md)

*Inherited from [BaseAPI](_api_.baseapi.md).[constructor](_api_.baseapi.md#constructor)*

*Defined in api.ts:58*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | `Configuration` | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` fetch | [FetchAPI](../interfaces/_api_.fetchapi.md) |  portableFetch |

**Returns:** [ManageEntitiesApi](_api_.manageentitiesapi.md)

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

<a id="deleteinboxusingdelete"></a>

###  deleteInboxUsingDELETE

▸ **deleteInboxUsingDELETE**(id: *`string`*, options?: *`any`*): `Promise`<`Response`>

*Defined in api.ts:1394*

Permanently delete an inbox and associated email address

*__summary__*: Delete Inbox

*__throws__*: {RequiredError}

*__memberof__*: ManageEntitiesApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  id |
| `Optional` options | `any` |

**Returns:** `Promise`<`Response`>

___
<a id="deletemessageusingdelete"></a>

###  deleteMessageUsingDELETE

▸ **deleteMessageUsingDELETE**(id: *`string`*, options?: *`any`*): `Promise`<`Response`>

*Defined in api.ts:1406*

Deletes an email and removes it from the inbox

*__summary__*: Delete Email

*__throws__*: {RequiredError}

*__memberof__*: ManageEntitiesApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  id |
| `Optional` options | `any` |

**Returns:** `Promise`<`Response`>

___
<a id="getinboxusingget"></a>

###  getInboxUsingGET

▸ **getInboxUsingGET**(id: *`string`*, options?: *`any`*): `Promise`<[Inbox](../interfaces/_api_.inbox.md)>

*Defined in api.ts:1418*

Returns an inbox's properties, including its email address

*__summary__*: Get Inbox

*__throws__*: {RequiredError}

*__memberof__*: ManageEntitiesApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  id |
| `Optional` options | `any` |

**Returns:** `Promise`<[Inbox](../interfaces/_api_.inbox.md)>

___
<a id="getinboxesusingget"></a>

###  getInboxesUsingGET

▸ **getInboxesUsingGET**(options?: *`any`*): `Promise`<[Inbox](../interfaces/_api_.inbox.md)[]>

*Defined in api.ts:1429*

List your inboxes

*__summary__*: List Inboxes

*__throws__*: {RequiredError}

*__memberof__*: ManageEntitiesApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `Promise`<[Inbox](../interfaces/_api_.inbox.md)[]>

___

