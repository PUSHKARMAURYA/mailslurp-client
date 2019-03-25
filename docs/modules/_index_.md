[mailslurp-client](../README.md) > ["index"](../modules/_index_.md)

# External module: "index"

## Index

### Classes

* [MailSlurp](../classes/_index_.mailslurp.md)

### Interfaces

* [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md)

### Type aliases

* [Config](_index_.md#config)
* [GetMessagesOptions](_index_.md#getmessagesoptions)

### Variables

* [log](_index_.md#log)

### Functions

* [logCall](_index_.md#logcall)

---

## Type aliases

<a id="config"></a>

###  Config

**Ƭ Config**: *`object`*

*Defined in [index.ts:18](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5b2ec3b/index.ts#L18)*

#### Type declaration

`Optional`  apiKey: `string`

___
<a id="getmessagesoptions"></a>

###  GetMessagesOptions

**Ƭ GetMessagesOptions**: *`object`*

*Defined in [index.ts:23](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5b2ec3b/index.ts#L23)*

#### Type declaration

`Optional`  limit: `number`

`Optional`  minCount: `number`

`Optional`  retryTimeout: `number`

`Optional`  since: `Date`

___

## Variables

<a id="log"></a>

### `<Const>` log

**● log**: *`any`* =  debug("mailslurp-client")

*Defined in [index.ts:16](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5b2ec3b/index.ts#L16)*

___

## Functions

<a id="logcall"></a>

###  logCall

▸ **logCall**<`T`>(tag: *`String`*, fn: *`function`*): `Promise`<`T`>

*Defined in [index.ts:60](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5b2ec3b/index.ts#L60)*

Helper logging function

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| tag | `String` |  \- |
| fn | `function` |   |

**Returns:** `Promise`<`T`>

___

