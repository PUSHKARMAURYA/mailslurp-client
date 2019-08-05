[mailslurp-client](../README.md) > ["index"](../modules/_index_.md) > [MailSlurp](../classes/_index_.mailslurp.md)

# Class: MailSlurp

MailSlurp client Usage: `const api = new MailSlurp({ apiKey: "test" }) const inbox = await api.createInbox()`

## Hierarchy

**MailSlurp**

## Implements

* [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md)

## Index

### Constructors

* [constructor](_index_.mailslurp.md#constructor)

### Properties

* [commonOperationsApi](_index_.mailslurp.md#commonoperationsapi)
* [extraOperationsApi](_index_.mailslurp.md#extraoperationsapi)

### Methods

* [bulkCreateInboxes](_index_.mailslurp.md#bulkcreateinboxes)
* [bulkDeleteInboxes](_index_.mailslurp.md#bulkdeleteinboxes)
* [bulkSendEmails](_index_.mailslurp.md#bulksendemails)
* [createInbox](_index_.mailslurp.md#createinbox)
* [createNewEmailAddress](_index_.mailslurp.md#createnewemailaddress)
* [deleteInbox](_index_.mailslurp.md#deleteinbox)
* [fetchLatestEmail](_index_.mailslurp.md#fetchlatestemail)
* [getEmail](_index_.mailslurp.md#getemail)
* [getEmails](_index_.mailslurp.md#getemails)
* [getInbox](_index_.mailslurp.md#getinbox)
* [getInboxes](_index_.mailslurp.md#getinboxes)
* [getRawEmail](_index_.mailslurp.md#getrawemail)
* [sendEmail](_index_.mailslurp.md#sendemail)
* [sendEmailSimple](_index_.mailslurp.md#sendemailsimple)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new MailSlurp**(opts: *[Config](../modules/_index_.md#config)*): [MailSlurp](_index_.mailslurp.md)

*Defined in [index.ts:100](https://github.com/mailslurp/mailslurp-client-ts-js/blob/aaf33c4/index.ts#L100)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| opts | [Config](../modules/_index_.md#config) |

**Returns:** [MailSlurp](_index_.mailslurp.md)

___

## Properties

<a id="commonoperationsapi"></a>

### `<Private>` commonOperationsApi

**● commonOperationsApi**: *`CommonOperationsApi`*

*Defined in [index.ts:99](https://github.com/mailslurp/mailslurp-client-ts-js/blob/aaf33c4/index.ts#L99)*

___
<a id="extraoperationsapi"></a>

### `<Private>` extraOperationsApi

**● extraOperationsApi**: *`ExtraOperationsApi`*

*Defined in [index.ts:100](https://github.com/mailslurp/mailslurp-client-ts-js/blob/aaf33c4/index.ts#L100)*

___

## Methods

<a id="bulkcreateinboxes"></a>

###  bulkCreateInboxes

▸ **bulkCreateInboxes**(count: *`number`*): `Promise`<`Inbox`[]>

*Implementation of [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md).[bulkCreateInboxes](../interfaces/_index_.abstractmailslurpclient.md#bulkcreateinboxes)*

*Defined in [index.ts:203](https://github.com/mailslurp/mailslurp-client-ts-js/blob/aaf33c4/index.ts#L203)*

Bulk create inboxes

**Parameters:**

| Name | Type |
| ------ | ------ |
| count | `number` |

**Returns:** `Promise`<`Inbox`[]>

___
<a id="bulkdeleteinboxes"></a>

###  bulkDeleteInboxes

▸ **bulkDeleteInboxes**(inboxIds: *`string`[]*): `Promise`<`Response`>

*Implementation of [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md).[bulkDeleteInboxes](../interfaces/_index_.abstractmailslurpclient.md#bulkdeleteinboxes)*

*Defined in [index.ts:210](https://github.com/mailslurp/mailslurp-client-ts-js/blob/aaf33c4/index.ts#L210)*

Bulk delete inboxes

**Parameters:**

| Name | Type |
| ------ | ------ |
| inboxIds | `string`[] |

**Returns:** `Promise`<`Response`>

___
<a id="bulksendemails"></a>

###  bulkSendEmails

▸ **bulkSendEmails**(bulkSendEmailOptions: *`BulkSendEmailOptions`*): `Promise`<`Response`>

*Implementation of [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md).[bulkSendEmails](../interfaces/_index_.abstractmailslurpclient.md#bulksendemails)*

*Defined in [index.ts:195](https://github.com/mailslurp/mailslurp-client-ts-js/blob/aaf33c4/index.ts#L195)*

Bulk send emails

**Parameters:**

| Name | Type |
| ------ | ------ |
| bulkSendEmailOptions | `BulkSendEmailOptions` |

**Returns:** `Promise`<`Response`>

___
<a id="createinbox"></a>

###  createInbox

▸ **createInbox**(): `Promise`<`Inbox`>

*Implementation of [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md).[createInbox](../interfaces/_index_.abstractmailslurpclient.md#createinbox)*

*Defined in [index.ts:131](https://github.com/mailslurp/mailslurp-client-ts-js/blob/aaf33c4/index.ts#L131)*

Create an inbox

**Returns:** `Promise`<`Inbox`>

___
<a id="createnewemailaddress"></a>

###  createNewEmailAddress

▸ **createNewEmailAddress**(): `Promise`<`Inbox`>

*Implementation of [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md).[createNewEmailAddress](../interfaces/_index_.abstractmailslurpclient.md#createnewemailaddress)*

*Defined in [index.ts:119](https://github.com/mailslurp/mailslurp-client-ts-js/blob/aaf33c4/index.ts#L119)*

**Returns:** `Promise`<`Inbox`>

___
<a id="deleteinbox"></a>

###  deleteInbox

▸ **deleteInbox**(inboxId: *`string`*): `Promise`<`Response`>

*Implementation of [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md).[deleteInbox](../interfaces/_index_.abstractmailslurpclient.md#deleteinbox)*

*Defined in [index.ts:139](https://github.com/mailslurp/mailslurp-client-ts-js/blob/aaf33c4/index.ts#L139)*

Delete an inbox by id

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inboxId | `string` |   |

**Returns:** `Promise`<`Response`>

___
<a id="fetchlatestemail"></a>

###  fetchLatestEmail

▸ **fetchLatestEmail**(inboxId?: *`string`*, inboxEmailAddress?: *`string`*): `Promise`<`Email`>

*Implementation of [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md).[fetchLatestEmail](../interfaces/_index_.abstractmailslurpclient.md#fetchlatestemail)*

*Defined in [index.ts:112](https://github.com/mailslurp/mailslurp-client-ts-js/blob/aaf33c4/index.ts#L112)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` inboxId | `string` |
| `Optional` inboxEmailAddress | `string` |

**Returns:** `Promise`<`Email`>

___
<a id="getemail"></a>

###  getEmail

▸ **getEmail**(emailId: *`string`*): `Promise`<`Email`>

*Implementation of [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md).[getEmail](../interfaces/_index_.abstractmailslurpclient.md#getemail)*

*Defined in [index.ts:171](https://github.com/mailslurp/mailslurp-client-ts-js/blob/aaf33c4/index.ts#L171)*

Get a full email from by id

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| emailId | `string` |   |

**Returns:** `Promise`<`Email`>

___
<a id="getemails"></a>

###  getEmails

▸ **getEmails**(inboxId: *`string`*, args?: *[GetMessagesOptions](../modules/_index_.md#getmessagesoptions)*): `Promise`<`EmailPreview`[]>

*Implementation of [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md).[getEmails](../interfaces/_index_.abstractmailslurpclient.md#getemails)*

*Defined in [index.ts:163](https://github.com/mailslurp/mailslurp-client-ts-js/blob/aaf33c4/index.ts#L163)*

Get all emails in an inbox as EmailPreviews. To get the full email, use the getEmail endpoint

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| inboxId | `string` | - |  \- |
| `Default value` args | [GetMessagesOptions](../modules/_index_.md#getmessagesoptions) |  {} |   |

**Returns:** `Promise`<`EmailPreview`[]>

___
<a id="getinbox"></a>

###  getInbox

▸ **getInbox**(inboxId: *`string`*): `Promise`<`Inbox`>

*Implementation of [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md).[getInbox](../interfaces/_index_.abstractmailslurpclient.md#getinbox)*

*Defined in [index.ts:147](https://github.com/mailslurp/mailslurp-client-ts-js/blob/aaf33c4/index.ts#L147)*

Get an inbox by id

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inboxId | `string` |   |

**Returns:** `Promise`<`Inbox`>

___
<a id="getinboxes"></a>

###  getInboxes

▸ **getInboxes**(): `Promise`<`Inbox`[]>

*Implementation of [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md).[getInboxes](../interfaces/_index_.abstractmailslurpclient.md#getinboxes)*

*Defined in [index.ts:154](https://github.com/mailslurp/mailslurp-client-ts-js/blob/aaf33c4/index.ts#L154)*

Get all inboxes

**Returns:** `Promise`<`Inbox`[]>

___
<a id="getrawemail"></a>

###  getRawEmail

▸ **getRawEmail**(emailId: *`string`*): `Promise`<`string`>

*Implementation of [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md).[getRawEmail](../interfaces/_index_.abstractmailslurpclient.md#getrawemail)*

*Defined in [index.ts:179](https://github.com/mailslurp/mailslurp-client-ts-js/blob/aaf33c4/index.ts#L179)*

Get an email's raw contents from by id

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| emailId | `string` |   |

**Returns:** `Promise`<`string`>

___
<a id="sendemail"></a>

###  sendEmail

▸ **sendEmail**(inboxId: *`string`*, sendEmailOptions: *`SendEmailOptions`*): `Promise`<`Response`>

*Implementation of [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md).[sendEmail](../interfaces/_index_.abstractmailslurpclient.md#sendemail)*

*Defined in [index.ts:188](https://github.com/mailslurp/mailslurp-client-ts-js/blob/aaf33c4/index.ts#L188)*

Send and email from a given inbox

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inboxId | `string` |  \- |
| sendEmailOptions | `SendEmailOptions` |   |

**Returns:** `Promise`<`Response`>

___
<a id="sendemailsimple"></a>

###  sendEmailSimple

▸ **sendEmailSimple**(sendEmailOptions: *`SendEmailOptions`*): `Promise`<`Response`>

*Implementation of [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md).[sendEmailSimple](../interfaces/_index_.abstractmailslurpclient.md#sendemailsimple)*

*Defined in [index.ts:123](https://github.com/mailslurp/mailslurp-client-ts-js/blob/aaf33c4/index.ts#L123)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| sendEmailOptions | `SendEmailOptions` |

**Returns:** `Promise`<`Response`>

___

