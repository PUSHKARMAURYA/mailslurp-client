[MailSlurp Client](../README.md) > [MailSlurp](../classes/mailslurp.md)

# Class: MailSlurp

Official MailSlurp Client

Installing `npm install --save mailslurp-client`

Import ES6

```javascript
 import { MailSlurp } from 'mailslurp-client'
```

Require ES5

```javascript
 const MailSlurp = require('mailslurp-client').MailSlurp
```

Configure

```javascript
 const mailslurp = new MailSlurp({ apiKey: "your-api-key" })
 const inbox = await mailslurp.createInbox()
```

**Get an API key at [app.mailslurp.com](https://app.mailslurp.com)**

## Hierarchy

**MailSlurp**

## Index

### Constructors

* [constructor](mailslurp.md#constructor)

### Methods

* [bulkCreateInboxes](mailslurp.md#bulkcreateinboxes)
* [bulkDeleteInboxes](mailslurp.md#bulkdeleteinboxes)
* [bulkSendEmails](mailslurp.md#bulksendemails)
* [createDomain](mailslurp.md#createdomain)
* [createInbox](mailslurp.md#createinbox)
* [createNewEmailAddress](mailslurp.md#createnewemailaddress)
* [createWebhook](mailslurp.md#createwebhook)
* [deleteDomain](mailslurp.md#deletedomain)
* [deleteEmail](mailslurp.md#deleteemail)
* [deleteEmailAddress](mailslurp.md#deleteemailaddress)
* [deleteInbox](mailslurp.md#deleteinbox)
* [deleteWebhook](mailslurp.md#deletewebhook)
* [downloadAttachment](mailslurp.md#downloadattachment)
* [emptyInbox](mailslurp.md#emptyinbox)
* [getAllEmails](mailslurp.md#getallemails)
* [getAllInboxes](mailslurp.md#getallinboxes)
* [getAttachmentMetaData](mailslurp.md#getattachmentmetadata)
* [getDomain](mailslurp.md#getdomain)
* [getDomains](mailslurp.md#getdomains)
* [getEmail](mailslurp.md#getemail)
* [getEmails](mailslurp.md#getemails)
* [getInbox](mailslurp.md#getinbox)
* [getInboxes](mailslurp.md#getinboxes)
* [getRawEmail](mailslurp.md#getrawemail)
* [getWebhooks](mailslurp.md#getwebhooks)
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

*Defined in [index.ts:107](https://github.com/mailslurp/mailslurp-client-ts-js/blob/84961e3/index.ts#L107)*

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

*Defined in [index.ts:392](https://github.com/mailslurp/mailslurp-client-ts-js/blob/84961e3/index.ts#L392)*

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

*Defined in [index.ts:401](https://github.com/mailslurp/mailslurp-client-ts-js/blob/84961e3/index.ts#L401)*

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

*Defined in [index.ts:381](https://github.com/mailslurp/mailslurp-client-ts-js/blob/84961e3/index.ts#L381)*

Bulk send emails

**Parameters:**

| Name | Type |
| ------ | ------ |
| bulkSendEmailOptions | [BulkSendEmailOptions](../interfaces/bulksendemailoptions.md) |

**Returns:** `Promise`<`Response`>

___
<a id="createdomain"></a>

###  createDomain

▸ **createDomain**(options: *[CreateDomainOptions](../interfaces/createdomainoptions.md)*): `Promise`<[DomainPlusVerificationRecordsAndStatus](../interfaces/domainplusverificationrecordsandstatus.md)>

*Defined in [index.ts:483](https://github.com/mailslurp/mailslurp-client-ts-js/blob/84961e3/index.ts#L483)*

Create a custom domain for use with MailSlurp You must own and have access to DNS setup for the domain in order to verify it

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| options | [CreateDomainOptions](../interfaces/createdomainoptions.md) |   |

**Returns:** `Promise`<[DomainPlusVerificationRecordsAndStatus](../interfaces/domainplusverificationrecordsandstatus.md)>

___
<a id="createinbox"></a>

###  createInbox

▸ **createInbox**(emailAddress?: *`string`*): `Promise`<[Inbox](../interfaces/inbox.md)>

*Defined in [index.ts:267](https://github.com/mailslurp/mailslurp-client-ts-js/blob/84961e3/index.ts#L267)*

Create an inbox / email address

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` emailAddress | `string` |

**Returns:** `Promise`<[Inbox](../interfaces/inbox.md)>

___
<a id="createnewemailaddress"></a>

###  createNewEmailAddress

▸ **createNewEmailAddress**(): `Promise`<[Inbox](../interfaces/inbox.md)>

*Defined in [index.ts:139](https://github.com/mailslurp/mailslurp-client-ts-js/blob/84961e3/index.ts#L139)*

Create a new email address / inbox

*__remarks__*: Returns `id` and `emailAddress` of created inbox.

**Returns:** `Promise`<[Inbox](../interfaces/inbox.md)>

___
<a id="createwebhook"></a>

###  createWebhook

▸ **createWebhook**(inboxId: *`string`*, createWebhookOptions: *[CreateWebhookOptions](../interfaces/createwebhookoptions.md)*): `Promise`<[Webhook](../interfaces/webhook.md)>

*Defined in [index.ts:410](https://github.com/mailslurp/mailslurp-client-ts-js/blob/84961e3/index.ts#L410)*

Create a webhook for notifications

**Parameters:**

| Name | Type |
| ------ | ------ |
| inboxId | `string` |
| createWebhookOptions | [CreateWebhookOptions](../interfaces/createwebhookoptions.md) |

**Returns:** `Promise`<[Webhook](../interfaces/webhook.md)>

___
<a id="deletedomain"></a>

###  deleteDomain

▸ **deleteDomain**(domainId: *`string`*): `Promise`<`Response`>

*Defined in [index.ts:510](https://github.com/mailslurp/mailslurp-client-ts-js/blob/84961e3/index.ts#L510)*

Delete domain

**Parameters:**

| Name | Type |
| ------ | ------ |
| domainId | `string` |

**Returns:** `Promise`<`Response`>

___
<a id="deleteemail"></a>

###  deleteEmail

▸ **deleteEmail**(emailId: *`string`*): `Promise`<`Response`>

*Defined in [index.ts:248](https://github.com/mailslurp/mailslurp-client-ts-js/blob/84961e3/index.ts#L248)*

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

*Defined in [index.ts:258](https://github.com/mailslurp/mailslurp-client-ts-js/blob/84961e3/index.ts#L258)*

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

*Defined in [index.ts:277](https://github.com/mailslurp/mailslurp-client-ts-js/blob/84961e3/index.ts#L277)*

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

*Defined in [index.ts:436](https://github.com/mailslurp/mailslurp-client-ts-js/blob/84961e3/index.ts#L436)*

Create a webhook for notifications for a given inbox

When the inbox receives an email your webhook url will be posted a json object containing the email id

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

*Defined in [index.ts:447](https://github.com/mailslurp/mailslurp-client-ts-js/blob/84961e3/index.ts#L447)*

Get email attachment by id

Returns HTTP response containing byte stream

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

*Defined in [index.ts:238](https://github.com/mailslurp/mailslurp-client-ts-js/blob/84961e3/index.ts#L238)*

Delete all emails in a given inbox

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inboxId | `string` |   |

**Returns:** `Promise`<`Response`>

___
<a id="getallemails"></a>

###  getAllEmails

▸ **getAllEmails**(page?: *`number`*, size?: *`number`*): `Promise`<[PageEmailProjection](../interfaces/pageemailprojection.md)>

*Defined in [index.ts:317](https://github.com/mailslurp/mailslurp-client-ts-js/blob/84961e3/index.ts#L317)*

Get all emails Returns paginated email previews

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` page | `number` |
| `Optional` size | `number` |

**Returns:** `Promise`<[PageEmailProjection](../interfaces/pageemailprojection.md)>

___
<a id="getallinboxes"></a>

###  getAllInboxes

▸ **getAllInboxes**(page?: *`number`*, size?: *`number`*): `Promise`<[PageInboxProjection](../interfaces/pageinboxprojection.md)>

*Defined in [index.ts:307](https://github.com/mailslurp/mailslurp-client-ts-js/blob/84961e3/index.ts#L307)*

Get all inboxes paginated Returns paginated inbox previews

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` page | `number` |
| `Optional` size | `number` |

**Returns:** `Promise`<[PageInboxProjection](../interfaces/pageinboxprojection.md)>

___
<a id="getattachmentmetadata"></a>

###  getAttachmentMetaData

▸ **getAttachmentMetaData**(attachmentId: *`string`*, emailId: *`string`*): `Promise`<[AttachmentMetaData](../interfaces/attachmentmetadata.md)>

*Defined in [index.ts:472](https://github.com/mailslurp/mailslurp-client-ts-js/blob/84961e3/index.ts#L472)*

Get attachment MetaData

MetaData includes name, size (bytes) and content-type.

**Parameters:**

| Name | Type |
| ------ | ------ |
| attachmentId | `string` |
| emailId | `string` |

**Returns:** `Promise`<[AttachmentMetaData](../interfaces/attachmentmetadata.md)>

___
<a id="getdomain"></a>

###  getDomain

▸ **getDomain**(domainId: *`string`*): `Promise`<[DomainPlusVerificationRecordsAndStatus](../interfaces/domainplusverificationrecordsandstatus.md)>

*Defined in [index.ts:501](https://github.com/mailslurp/mailslurp-client-ts-js/blob/84961e3/index.ts#L501)*

Get domain

**Parameters:**

| Name | Type |
| ------ | ------ |
| domainId | `string` |

**Returns:** `Promise`<[DomainPlusVerificationRecordsAndStatus](../interfaces/domainplusverificationrecordsandstatus.md)>

___
<a id="getdomains"></a>

###  getDomains

▸ **getDomains**(): `Promise`<`Array`<[DomainPreview](../interfaces/domainpreview.md)>>

*Defined in [index.ts:492](https://github.com/mailslurp/mailslurp-client-ts-js/blob/84961e3/index.ts#L492)*

Get domains

**Returns:** `Promise`<`Array`<[DomainPreview](../interfaces/domainpreview.md)>>

___
<a id="getemail"></a>

###  getEmail

▸ **getEmail**(emailId: *`string`*): `Promise`<[Email](../interfaces/email.md)>

*Defined in [index.ts:348](https://github.com/mailslurp/mailslurp-client-ts-js/blob/84961e3/index.ts#L348)*

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

*Defined in [index.ts:328](https://github.com/mailslurp/mailslurp-client-ts-js/blob/84961e3/index.ts#L328)*

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

*Defined in [index.ts:287](https://github.com/mailslurp/mailslurp-client-ts-js/blob/84961e3/index.ts#L287)*

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

*Defined in [index.ts:296](https://github.com/mailslurp/mailslurp-client-ts-js/blob/84961e3/index.ts#L296)*

Get all inboxes

**Returns:** `Promise`<[Inbox](../interfaces/inbox.md)[]>

___
<a id="getrawemail"></a>

###  getRawEmail

▸ **getRawEmail**(emailId: *`string`*): `Promise`<`string`>

*Defined in [index.ts:358](https://github.com/mailslurp/mailslurp-client-ts-js/blob/84961e3/index.ts#L358)*

Get an email's raw contents from by id

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| emailId | `string` |   |

**Returns:** `Promise`<`string`>

___
<a id="getwebhooks"></a>

###  getWebhooks

▸ **getWebhooks**(inboxId: *`string`*): `Promise`<[Webhook](../interfaces/webhook.md)[]>

*Defined in [index.ts:423](https://github.com/mailslurp/mailslurp-client-ts-js/blob/84961e3/index.ts#L423)*

Get webhooks for an inbox

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inboxId | `string` |   |

**Returns:** `Promise`<[Webhook](../interfaces/webhook.md)[]>

___
<a id="sendemail"></a>

###  sendEmail

▸ **sendEmail**(inboxId: *`string`*, sendEmailOptions: *[SendEmailOptions](../interfaces/sendemailoptions.md)*): `Promise`<`Response`>

*Defined in [index.ts:369](https://github.com/mailslurp/mailslurp-client-ts-js/blob/84961e3/index.ts#L369)*

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

*Defined in [index.ts:154](https://github.com/mailslurp/mailslurp-client-ts-js/blob/84961e3/index.ts#L154)*

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

▸ **uploadAttachment**(options: *[UploadAttachmentOptions](../interfaces/uploadattachmentoptions.md)*): `Promise`<`Array`<`String`>>

*Defined in [index.ts:461](https://github.com/mailslurp/mailslurp-client-ts-js/blob/84961e3/index.ts#L461)*

Upload an attachment for use in email sending

Attachment contents must be a base64 encoded string

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | [UploadAttachmentOptions](../interfaces/uploadattachmentoptions.md) |

**Returns:** `Promise`<`Array`<`String`>>

___
<a id="waitforemailcount"></a>

###  waitForEmailCount

▸ **waitForEmailCount**(count?: *`number`*, inboxId?: *`string`*, timeout?: *`number`*): `Promise`<[EmailPreview](../interfaces/emailpreview.md)[]>

*Defined in [index.ts:224](https://github.com/mailslurp/mailslurp-client-ts-js/blob/84961e3/index.ts#L224)*

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

*Defined in [index.ts:171](https://github.com/mailslurp/mailslurp-client-ts-js/blob/84961e3/index.ts#L171)*

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

▸ **waitForMatchingEmails**(matchOptions: *[MatchOptions](../interfaces/matchoptions.md)*, count?: *`number`*, inboxId?: *`string`*, timeout?: *`number`*): `Promise`<[EmailPreview](../interfaces/emailpreview.md)[]>

*Defined in [index.ts:201](https://github.com/mailslurp/mailslurp-client-ts-js/blob/84961e3/index.ts#L201)*

Wait until both count and match options are met and return list of emails.

*__remarks__*: Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| matchOptions | [MatchOptions](../interfaces/matchoptions.md) |  \- |
| `Optional` count | `number` |  \- |
| `Optional` inboxId | `string` |  \- |
| `Optional` timeout | `number` |  timeout max milliseconds to wait |

**Returns:** `Promise`<[EmailPreview](../interfaces/emailpreview.md)[]>

___
<a id="waitfornthemail"></a>

###  waitForNthEmail

▸ **waitForNthEmail**(inboxId: *`string`*, index: *`number`*, timeout?: *`number`*): `Promise`<[Email](../interfaces/email.md)>

*Defined in [index.ts:180](https://github.com/mailslurp/mailslurp-client-ts-js/blob/84961e3/index.ts#L180)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| inboxId | `string` |
| index | `number` |
| `Optional` timeout | `number` |

**Returns:** `Promise`<[Email](../interfaces/email.md)>

___

