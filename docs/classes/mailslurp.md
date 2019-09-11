[MailSlurp Client](../README.md) > [MailSlurp](../classes/mailslurp.md)

# Class: MailSlurp

MailSlurp client

Usage:

```javascript
 const api = new MailSlurp({ apiKey: "your-api-key" })
 const inbox = await api.createInbox()
```

## Hierarchy

**MailSlurp**

## Index

### Constructors

* [constructor](mailslurp.md#constructor)

### Methods

* [bulkCreateInboxes](mailslurp.md#bulkcreateinboxes)
* [bulkDeleteInboxes](mailslurp.md#bulkdeleteinboxes)
* [bulkSendEmails](mailslurp.md#bulksendemails)
* [createInbox](mailslurp.md#createinbox)
* [createNewEmailAddress](mailslurp.md#createnewemailaddress)
* [createWebhook](mailslurp.md#createwebhook)
* [deleteEmail](mailslurp.md#deleteemail)
* [deleteEmailAddress](mailslurp.md#deleteemailaddress)
* [deleteInbox](mailslurp.md#deleteinbox)
* [deleteWebhook](mailslurp.md#deletewebhook)
* [downloadAttachment](mailslurp.md#downloadattachment)
* [emptyInbox](mailslurp.md#emptyinbox)
* [getEmail](mailslurp.md#getemail)
* [getEmails](mailslurp.md#getemails)
* [getInbox](mailslurp.md#getinbox)
* [getInboxes](mailslurp.md#getinboxes)
* [getRawEmail](mailslurp.md#getrawemail)
* [sendEmail](mailslurp.md#sendemail)
* [sendEmailSimple](mailslurp.md#sendemailsimple)
* [uploadAttachment](mailslurp.md#uploadattachment)
* [waitForEmailCount](mailslurp.md#waitforemailcount)
* [waitForLatestEmail](mailslurp.md#waitforlatestemail)
* [waitForMatchingEmails](mailslurp.md#waitformatchingemails)
* [waitForNthEmail](mailslurp.md#waitfornthemail)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new MailSlurp**(opts: *[Config](../#config)*): [MailSlurp](mailslurp.md)

*Defined in [index.ts:82](https://github.com/mailslurp/mailslurp-client-ts-js/blob/982b5f6/index.ts#L82)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| opts | [Config](../#config) |

**Returns:** [MailSlurp](mailslurp.md)

___

## Methods

<a id="bulkcreateinboxes"></a>

###  bulkCreateInboxes

▸ **bulkCreateInboxes**(count: *`number`*): `Promise`<[Inbox](../interfaces/inbox.md)[]>

*Defined in [index.ts:333](https://github.com/mailslurp/mailslurp-client-ts-js/blob/982b5f6/index.ts#L333)*

Bulk create inboxes

**Parameters:**

| Name | Type |
| ------ | ------ |
| count | `number` |

**Returns:** `Promise`<[Inbox](../interfaces/inbox.md)[]>

___
<a id="bulkdeleteinboxes"></a>

###  bulkDeleteInboxes

▸ **bulkDeleteInboxes**(inboxIds: *`string`[]*): `Promise`<`Response`>

*Defined in [index.ts:342](https://github.com/mailslurp/mailslurp-client-ts-js/blob/982b5f6/index.ts#L342)*

Bulk delete inboxes

**Parameters:**

| Name | Type |
| ------ | ------ |
| inboxIds | `string`[] |

**Returns:** `Promise`<`Response`>

___
<a id="bulksendemails"></a>

###  bulkSendEmails

▸ **bulkSendEmails**(bulkSendEmailOptions: *[BulkSendEmailOptions](../interfaces/bulksendemailoptions.md)*): `Promise`<`Response`>

*Defined in [index.ts:322](https://github.com/mailslurp/mailslurp-client-ts-js/blob/982b5f6/index.ts#L322)*

Bulk send emails

**Parameters:**

| Name | Type |
| ------ | ------ |
| bulkSendEmailOptions | [BulkSendEmailOptions](../interfaces/bulksendemailoptions.md) |

**Returns:** `Promise`<`Response`>

___
<a id="createinbox"></a>

###  createInbox

▸ **createInbox**(): `Promise`<[Inbox](../interfaces/inbox.md)>

*Defined in [index.ts:230](https://github.com/mailslurp/mailslurp-client-ts-js/blob/982b5f6/index.ts#L230)*

Create an inbox / email address

**Returns:** `Promise`<[Inbox](../interfaces/inbox.md)>

___
<a id="createnewemailaddress"></a>

###  createNewEmailAddress

▸ **createNewEmailAddress**(): `Promise`<[Inbox](../interfaces/inbox.md)>

*Defined in [index.ts:103](https://github.com/mailslurp/mailslurp-client-ts-js/blob/982b5f6/index.ts#L103)*

Create a new email address / inbox

*__remarks__*: Returns id and emailAddress of created inbox. All none-paid accounts use the `@mailslurp.com` domain. Custom domains available with plans.

**Returns:** `Promise`<[Inbox](../interfaces/inbox.md)>

___
<a id="createwebhook"></a>

###  createWebhook

▸ **createWebhook**(inboxId: *`string`*, createWebhookOptions: *[CreateWebhookOptions](../interfaces/createwebhookoptions.md)*): `Promise`<[Webhook](../interfaces/webhook.md)>

*Defined in [index.ts:351](https://github.com/mailslurp/mailslurp-client-ts-js/blob/982b5f6/index.ts#L351)*

Create a webhook for notifications

**Parameters:**

| Name | Type |
| ------ | ------ |
| inboxId | `string` |
| createWebhookOptions | [CreateWebhookOptions](../interfaces/createwebhookoptions.md) |

**Returns:** `Promise`<[Webhook](../interfaces/webhook.md)>

___
<a id="deleteemail"></a>

###  deleteEmail

▸ **deleteEmail**(emailId: *`string`*): `Promise`<`Response`>

*Defined in [index.ts:211](https://github.com/mailslurp/mailslurp-client-ts-js/blob/982b5f6/index.ts#L211)*

Delete an email by id

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| emailId | `string` |   |

**Returns:** `Promise`<`Response`>

___
<a id="deleteemailaddress"></a>

###  deleteEmailAddress

▸ **deleteEmailAddress**(emailId: *`string`*): `Promise`<`Response`>

*Defined in [index.ts:221](https://github.com/mailslurp/mailslurp-client-ts-js/blob/982b5f6/index.ts#L221)*

Delete an email by id

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| emailId | `string` |   |

**Returns:** `Promise`<`Response`>

___
<a id="deleteinbox"></a>

###  deleteInbox

▸ **deleteInbox**(inboxId: *`string`*): `Promise`<`Response`>

*Defined in [index.ts:240](https://github.com/mailslurp/mailslurp-client-ts-js/blob/982b5f6/index.ts#L240)*

Delete an inbox by id

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inboxId | `string` |   |

**Returns:** `Promise`<`Response`>

___
<a id="deletewebhook"></a>

###  deleteWebhook

▸ **deleteWebhook**(inboxId: *`string`*, webhookId: *`string`*): `Promise`<`Response`>

*Defined in [index.ts:363](https://github.com/mailslurp/mailslurp-client-ts-js/blob/982b5f6/index.ts#L363)*

Create a webhook for notifications

**Parameters:**

| Name | Type |
| ------ | ------ |
| inboxId | `string` |
| webhookId | `string` |

**Returns:** `Promise`<`Response`>

___
<a id="downloadattachment"></a>

###  downloadAttachment

▸ **downloadAttachment**(emailId: *`string`*, attachmentId: *`string`*): `Promise`<`Response`>

*Defined in [index.ts:372](https://github.com/mailslurp/mailslurp-client-ts-js/blob/982b5f6/index.ts#L372)*

Get email attachment by id

**Parameters:**

| Name | Type |
| ------ | ------ |
| emailId | `string` |
| attachmentId | `string` |

**Returns:** `Promise`<`Response`>

___
<a id="emptyinbox"></a>

###  emptyInbox

▸ **emptyInbox**(inboxId: *`string`*): `Promise`<`Response`>

*Defined in [index.ts:201](https://github.com/mailslurp/mailslurp-client-ts-js/blob/982b5f6/index.ts#L201)*

Delete all emails in a given inbox

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inboxId | `string` |   |

**Returns:** `Promise`<`Response`>

___
<a id="getemail"></a>

###  getEmail

▸ **getEmail**(emailId: *`string`*): `Promise`<[Email](../interfaces/email.md)>

*Defined in [index.ts:289](https://github.com/mailslurp/mailslurp-client-ts-js/blob/982b5f6/index.ts#L289)*

Get a full email from by id

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| emailId | `string` |   |

**Returns:** `Promise`<[Email](../interfaces/email.md)>

___
<a id="getemails"></a>

###  getEmails

▸ **getEmails**(inboxId: *`string`*, args?: *[GetMessagesOptions](../#getmessagesoptions)*): `Promise`<[EmailPreview](../interfaces/emailpreview.md)[]>

*Defined in [index.ts:270](https://github.com/mailslurp/mailslurp-client-ts-js/blob/982b5f6/index.ts#L270)*

Get all emails in an inbox as EmailPreviews. To get the full email, use the getEmail endpoint

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| inboxId | `string` | - |  \- |
| `Default value` args | [GetMessagesOptions](../#getmessagesoptions) |  {} |   |

**Returns:** `Promise`<[EmailPreview](../interfaces/emailpreview.md)[]>

___
<a id="getinbox"></a>

###  getInbox

▸ **getInbox**(inboxId: *`string`*): `Promise`<[Inbox](../interfaces/inbox.md)>

*Defined in [index.ts:250](https://github.com/mailslurp/mailslurp-client-ts-js/blob/982b5f6/index.ts#L250)*

Get an inbox by id

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inboxId | `string` |   |

**Returns:** `Promise`<[Inbox](../interfaces/inbox.md)>

___
<a id="getinboxes"></a>

###  getInboxes

▸ **getInboxes**(): `Promise`<[Inbox](../interfaces/inbox.md)[]>

*Defined in [index.ts:259](https://github.com/mailslurp/mailslurp-client-ts-js/blob/982b5f6/index.ts#L259)*

Get all inboxes

**Returns:** `Promise`<[Inbox](../interfaces/inbox.md)[]>

___
<a id="getrawemail"></a>

###  getRawEmail

▸ **getRawEmail**(emailId: *`string`*): `Promise`<`string`>

*Defined in [index.ts:299](https://github.com/mailslurp/mailslurp-client-ts-js/blob/982b5f6/index.ts#L299)*

Get an email's raw contents from by id

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| emailId | `string` |   |

**Returns:** `Promise`<`string`>

___
<a id="sendemail"></a>

###  sendEmail

▸ **sendEmail**(inboxId: *`string`*, sendEmailOptions: *[SendEmailOptions](../interfaces/sendemailoptions.md)*): `Promise`<`Response`>

*Defined in [index.ts:310](https://github.com/mailslurp/mailslurp-client-ts-js/blob/982b5f6/index.ts#L310)*

Send and email from a given inbox

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inboxId | `string` |  \- |
| sendEmailOptions | [SendEmailOptions](../interfaces/sendemailoptions.md) |   |

**Returns:** `Promise`<`Response`>

___
<a id="sendemailsimple"></a>

###  sendEmailSimple

▸ **sendEmailSimple**(sendEmailOptions: *[SendEmailOptions](../interfaces/sendemailoptions.md)*): `Promise`<`Response`>

*Defined in [index.ts:118](https://github.com/mailslurp/mailslurp-client-ts-js/blob/982b5f6/index.ts#L118)*

Send an email from a random address

*__remarks__*: To send from a known address first create an inbox and then use the sendEmail endpoints.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| sendEmailOptions | [SendEmailOptions](../interfaces/sendemailoptions.md) |   |

**Returns:** `Promise`<`Response`>

___
<a id="uploadattachment"></a>

###  uploadAttachment

▸ **uploadAttachment**(options: *[UploadAttachmentOptions](../interfaces/uploadattachmentoptions.md)*): `Promise`<`String`>

*Defined in [index.ts:384](https://github.com/mailslurp/mailslurp-client-ts-js/blob/982b5f6/index.ts#L384)*

Upload an attachment for use in email sending

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | [UploadAttachmentOptions](../interfaces/uploadattachmentoptions.md) |

**Returns:** `Promise`<`String`>

___
<a id="waitforemailcount"></a>

###  waitForEmailCount

▸ **waitForEmailCount**(count?: *`number`*, inboxId?: *`string`*, timeout?: *`number`*): `Promise`<[EmailPreview](../interfaces/emailpreview.md)[]>

*Defined in [index.ts:187](https://github.com/mailslurp/mailslurp-client-ts-js/blob/982b5f6/index.ts#L187)*

Wait for and return list of emails with length of given count

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` count | `number` |  \- |
| `Optional` inboxId | `string` |  \- |
| `Optional` timeout | `number` |   |

**Returns:** `Promise`<[EmailPreview](../interfaces/emailpreview.md)[]>

___
<a id="waitforlatestemail"></a>

###  waitForLatestEmail

▸ **waitForLatestEmail**(inboxId?: *`string`*, timeout?: *`number`*): `Promise`<[Email](../interfaces/email.md)>

*Defined in [index.ts:135](https://github.com/mailslurp/mailslurp-client-ts-js/blob/982b5f6/index.ts#L135)*

Wait for an email to arrive at an inbox or return first found result

*__remarks__*: Retries the call until at least one email is found or a maximum timeout is exceeded

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` inboxId | `string` |  \- |
| `Optional` timeout | `number` |  max milliseconds to wait |

**Returns:** `Promise`<[Email](../interfaces/email.md)>

___
<a id="waitformatchingemails"></a>

###  waitForMatchingEmails

▸ **waitForMatchingEmails**(matchOptions: *`MatchOptions`*, count?: *`number`*, inboxId?: *`string`*, timeout?: *`number`*): `Promise`<[EmailPreview](../interfaces/emailpreview.md)[]>

*Defined in [index.ts:165](https://github.com/mailslurp/mailslurp-client-ts-js/blob/982b5f6/index.ts#L165)*

Wait until both count and match options are met and return list of emails.

*__remarks__*: Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| matchOptions | `MatchOptions` |  \- |
| `Optional` count | `number` |  \- |
| `Optional` inboxId | `string` |  \- |
| `Optional` timeout | `number` |  timeout max milliseconds to wait |

**Returns:** `Promise`<[EmailPreview](../interfaces/emailpreview.md)[]>

___
<a id="waitfornthemail"></a>

###  waitForNthEmail

▸ **waitForNthEmail**(inboxId: *`string`*, index: *`number`*, timeout?: *`number`*): `Promise`<[Email](../interfaces/email.md)>

*Defined in [index.ts:144](https://github.com/mailslurp/mailslurp-client-ts-js/blob/982b5f6/index.ts#L144)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| inboxId | `string` |
| index | `number` |
| `Optional` timeout | `number` |

**Returns:** `Promise`<[Email](../interfaces/email.md)>

___

