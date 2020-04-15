# Class: MailSlurp

Official MailSlurp Client

## Install
`npm install --save mailslurp-client`

## Configure
Create a MailSlurp account to get an [API Key](https://app.mailslurp.com/sign-up/).

```typescript
const MailSlurp = require('mailslurp-client').default;
const mailslurp = new MailSlurp({ apiKey: 'xxxx' })
```

## Make requests

```typescript
const inbox = await mailslurp.createInbox()
await mailslurp.sendEmail({ to: [inbox.emailAddress] })
const email = await mailslurp.waitForLatestEmail(inbox.id)
```

Read [quick start guide](https://www.mailslurp.com/guides/) for more examples or see the methods below.

## Hierarchy

* **MailSlurp**

## Constructors

###  constructor

\+ **new MailSlurp**(`opts`: [Config](../modules/_index_.md#config)): *[MailSlurp](_index_.mailslurp.md)*

*Defined in [src/index.ts:88](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/index.ts#L88)*

Create a new MailSlurp instance. Contains top level convenience functions. Access full API controllers as properties on the instance.

```javascript
const mailslurp = new MailSlurp({ apiKey })

// convenience functions
const email = await mailslurp.waitForLatestEmail(...args)

// full controllers accessed through methods
const alias = await mailslurp.aliasController.createAlias(...args)
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`opts` | [Config](../modules/_index_.md#config) |   |

**Returns:** *[MailSlurp](_index_.mailslurp.md)*

## Properties

###  aliasController

• **aliasController**: *[AliasControllerApi](_generated_api_.aliascontrollerapi.md)*

*Defined in [src/index.ts:82](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/index.ts#L82)*

___

###  attachmentController

• **attachmentController**: *[AttachmentControllerApi](_generated_api_.attachmentcontrollerapi.md)*

*Defined in [src/index.ts:76](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/index.ts#L76)*

___

###  bulkController

• **bulkController**: *[BulkActionsControllerApi](_generated_api_.bulkactionscontrollerapi.md)*

*Defined in [src/index.ts:79](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/index.ts#L79)*

___

###  commonController

• **commonController**: *[CommonActionsControllerApi](_generated_api_.commonactionscontrollerapi.md)*

*Defined in [src/index.ts:78](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/index.ts#L78)*

___

###  contactController

• **contactController**: *[ContactControllerApi](_generated_api_.contactcontrollerapi.md)*

*Defined in [src/index.ts:85](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/index.ts#L85)*

___

###  domainController

• **domainController**: *[DomainControllerApi](_generated_api_.domaincontrollerapi.md)*

*Defined in [src/index.ts:84](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/index.ts#L84)*

___

###  emailController

• **emailController**: *[EmailControllerApi](_generated_api_.emailcontrollerapi.md)*

*Defined in [src/index.ts:74](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/index.ts#L74)*

___

###  formController

• **formController**: *[FormControllerApi](_generated_api_.formcontrollerapi.md)*

*Defined in [src/index.ts:83](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/index.ts#L83)*

___

###  groupController

• **groupController**: *[GroupControllerApi](_generated_api_.groupcontrollerapi.md)*

*Defined in [src/index.ts:86](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/index.ts#L86)*

___

###  inboxController

• **inboxController**: *[InboxControllerApi](_generated_api_.inboxcontrollerapi.md)*

*Defined in [src/index.ts:75](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/index.ts#L75)*

___

###  templateController

• **templateController**: *[TemplateControllerApi](_generated_api_.templatecontrollerapi.md)*

*Defined in [src/index.ts:87](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/index.ts#L87)*

___

###  waitController

• **waitController**: *[WaitForControllerApi](_generated_api_.waitforcontrollerapi.md)*

*Defined in [src/index.ts:80](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/index.ts#L80)*

___

###  webhookController

• **webhookController**: *[WebhookControllerApi](_generated_api_.webhookcontrollerapi.md)*

*Defined in [src/index.ts:88](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/index.ts#L88)*

## Methods

###  createInbox

▸ **createInbox**(`emailAddress?`: string, `name?`: string, `description?`: string, `expiresAt?`: Date, `favourite?`: boolean, `tags?`: Array‹string›): *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)›*

*Defined in [src/index.ts:146](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/index.ts#L146)*

Create a new inbox and with a randomized email address to send and receive from. Pass emailAddress parameter if you wish to use a specific email address. Creating an inbox is required before sending or receiving emails. If writing tests it is recommended that you create a new inbox during each test method so that it is unique and empty.

**`summary`** Create an Inbox (email address)

**Parameters:**

Name | Type |
------ | ------ |
`emailAddress?` | string |
`name?` | string |
`description?` | string |
`expiresAt?` | Date |
`favourite?` | boolean |
`tags?` | Array‹string› |

**Returns:** *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)›*

___

###  deleteEmail

▸ **deleteEmail**(`emailId`: string): *Promise‹Response›*

*Defined in [src/index.ts:332](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/index.ts#L332)*

Deletes an email and removes it from the inbox. Deleted emails cannot be recovered.

**`summary`** Delete an email

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string | emailId  |

**Returns:** *Promise‹Response›*

___

###  deleteInbox

▸ **deleteInbox**(`inboxId`: string): *Promise‹Response›*

*Defined in [src/index.ts:171](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/index.ts#L171)*

Permanently delete an inbox and associated email address aswell as all emails within the given inbox. This action cannot be undone. Note: deleting an inbox will not affect your account usage. Monthly inbox usage is based on how many inboxes you create within 30 days, not how many exist at time of request.

**`summary`** Delete inbox

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | inboxId  |

**Returns:** *Promise‹Response›*

___

###  downloadAttachment

▸ **downloadAttachment**(`emailId`: string, `attachmentId`: string): *Promise‹String›*

*Defined in [src/index.ts:430](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/index.ts#L430)*

Returns the specified attachment for a given email as a byte stream (file download). You can find attachment ids in email responses endpoint responses. The response type is application/octet-stream.

**`summary`** Get email attachment bytes

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string | emailId |
`attachmentId` | string | attachmentId  |

**Returns:** *Promise‹String›*

___

###  emptyInbox

▸ **emptyInbox**(`inboxId`: string): *Promise‹Response›*

*Defined in [src/index.ts:182](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/index.ts#L182)*

Deletes all emails

**`summary`** Delete all emails in an inbox

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | inboxId  |

**Returns:** *Promise‹Response›*

___

###  getAllEmails

▸ **getAllEmails**(`page?`: number, `size?`: number, `inboxId?`: Array‹string›, `sort?`: [SortEnum](../modules/_index_.md#sortenum), `unreadOnly?`: boolean): *Promise‹[PageEmailProjection](../interfaces/_generated_api_.pageemailprojection.md)›*

*Defined in [src/index.ts:347](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/index.ts#L347)*

By default returns all emails across all inboxes sorted by ascending created at date. Responses are paginated. You can restrict results to a list of inbox IDs. You can also filter out read messages

**`summary`** Get all emails

**Parameters:**

Name | Type |
------ | ------ |
`page?` | number |
`size?` | number |
`inboxId?` | Array‹string› |
`sort?` | [SortEnum](../modules/_index_.md#sortenum) |
`unreadOnly?` | boolean |

**Returns:** *Promise‹[PageEmailProjection](../interfaces/_generated_api_.pageemailprojection.md)›*

___

###  getAllInboxes

▸ **getAllInboxes**(`page?`: number, `size?`: number, `favourite?`: boolean, `search?`: string, `sort?`: [SortEnum](../modules/_index_.md#sortenum), `tag?`: string): *Promise‹[PageInboxProjection](../interfaces/_generated_api_.pageinboxprojection.md)›*

*Defined in [src/index.ts:217](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/index.ts#L217)*

List inboxes in paginated form. Allows for page index, page size, and sort direction. Can also filter by favourited or email address like pattern.

**`summary`** List Inboxes Paginated

**Parameters:**

Name | Type |
------ | ------ |
`page?` | number |
`size?` | number |
`favourite?` | boolean |
`search?` | string |
`sort?` | [SortEnum](../modules/_index_.md#sortenum) |
`tag?` | string |

**Returns:** *Promise‹[PageInboxProjection](../interfaces/_generated_api_.pageinboxprojection.md)›*

___

###  getAttachmentMetaData

▸ **getAttachmentMetaData**(`attachmentId`: string, `emailId`: string): *Promise‹[AttachmentMetaData](../interfaces/_generated_api_.attachmentmetadata.md)›*

*Defined in [src/index.ts:463](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/index.ts#L463)*

Get attachment MetaData

MetaData includes name, size (bytes) and content-type.

**`summary`** Get email attachment metadata

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`attachmentId` | string | attachmentId |
`emailId` | string | emailId  |

**Returns:** *Promise‹[AttachmentMetaData](../interfaces/_generated_api_.attachmentmetadata.md)›*

___

###  getEmail

▸ **getEmail**(`emailId`: string): *Promise‹[Email](../interfaces/_generated_api_.email.md)›*

*Defined in [src/index.ts:392](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/index.ts#L392)*

Returns an EmailDto object with headers and content. To retrieve the raw unparsed email use the getRawEmail endpoints

**`summary`** Get email content

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string | emailId  |

**Returns:** *Promise‹[Email](../interfaces/_generated_api_.email.md)›*

___

###  getEmails

▸ **getEmails**(`inboxId`: string, `args`: [GetMessagesOptions](../modules/_index_.md#getmessagesoptions)): *Promise‹[EmailPreview](../interfaces/_generated_api_.emailpreview.md)[]›*

*Defined in [src/index.ts:371](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/index.ts#L371)*

List emails that an inbox has received. Only emails that are sent to the inbox's email address will appear in the inbox. It may take several seconds for any email you send to an inbox's email address to appear in the inbox. To make this endpoint wait for a minimum number of emails use the `minCount` parameter. The server will retry the inbox database until the `minCount` is satisfied or the `retryTimeout` is reached

**`summary`** Get emails in an Inbox

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`inboxId` | string | - | Id of inbox that emails belongs to |
`args` | [GetMessagesOptions](../modules/_index_.md#getmessagesoptions) |  {} | - |

**Returns:** *Promise‹[EmailPreview](../interfaces/_generated_api_.emailpreview.md)[]›*

___

###  getInbox

▸ **getInbox**(`inboxId`: string): *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)›*

*Defined in [src/index.ts:193](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/index.ts#L193)*

Returns an inbox's properties, including its email address and ID.

**`summary`** Get Inbox

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | inboxId  |

**Returns:** *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)›*

___

###  getInboxes

▸ **getInboxes**(): *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)[]›*

*Defined in [src/index.ts:203](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/index.ts#L203)*

List the inboxes you have created

**`summary`** List Inboxes / Email Addresses

**Returns:** *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)[]›*

___

###  getRawEmail

▸ **getRawEmail**(`emailId`: string): *Promise‹string›*

*Defined in [src/index.ts:403](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/index.ts#L403)*

Returns a raw, unparsed, and unprocessed email. If your client has issues processing the response it is likely due to the response content-type which is text/plain. If you need a JSON response content-type use the getRawEmailJson endpoint

**`summary`** Get raw email string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string | emailId  |

**Returns:** *Promise‹string›*

___

###  sendEmail

▸ **sendEmail**(`inboxId`: string, `sendEmailOptions`: [SendEmailOptions](../modules/_generated_api_.sendemailoptions.md)): *Promise‹Response›*

*Defined in [src/index.ts:415](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/index.ts#L415)*

Send an email from an inbox's email address.  The request body should contain the `SendEmailOptions` that include recipients, attachments, body etc. See `SendEmailOptions` for all available properties. Note the `inboxId` refers to the inbox's id not the inbox's email address. See https://www.mailslurp.com/guides/ for more information on how to send emails.

**`summary`** Send Email

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | ID of the inbox you want to send the email from |
`sendEmailOptions` | [SendEmailOptions](../modules/_generated_api_.sendemailoptions.md) | - |

**Returns:** *Promise‹Response›*

___

###  uploadAttachment

▸ **uploadAttachment**(`options`: [UploadAttachmentOptions](../interfaces/_generated_api_.uploadattachmentoptions.md)): *Promise‹Array‹String››*

*Defined in [src/index.ts:447](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/index.ts#L447)*

Upload an attachment for use in email sending. Attachment contents must be a base64 encoded string.
When sending emails with attachments first upload each attachment with this endpoint.
Record the returned attachment IDs. Then use these attachment IDs in the SendEmailOptions when sending an email.
This means that attachments can easily be reused.

**`summary`** Upload an attachment for sending

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UploadAttachmentOptions](../interfaces/_generated_api_.uploadattachmentoptions.md) |

**Returns:** *Promise‹Array‹String››*

___

###  waitForEmailCount

▸ **waitForEmailCount**(`count?`: number, `inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean): *Promise‹[EmailPreview](../interfaces/_generated_api_.emailpreview.md)[]›*

*Defined in [src/index.ts:311](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/index.ts#L311)*

If inbox contains count or more emails at time of request then return count worth of emails. If not wait until the count is reached and return those or return an error if timeout is exceeded.

**`summary`** Wait for and return count number of emails

**Parameters:**

Name | Type |
------ | ------ |
`count?` | number |
`inboxId?` | string |
`timeout?` | number |
`unreadOnly?` | boolean |

**Returns:** *Promise‹[EmailPreview](../interfaces/_generated_api_.emailpreview.md)[]›*

___

###  waitForLatestEmail

▸ **waitForLatestEmail**(`inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean): *Promise‹[Email](../interfaces/_generated_api_.email.md)›*

*Defined in [src/index.ts:245](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/index.ts#L245)*

Will return either the last received email or wait for an email to arrive and return that. If you need to wait for an email for a non-empty inbox see the other receive methods such as waitForNthEmail or waitForEmailCount.

**`summary`** Fetch inbox's latest email or if empty wait for an email to arrive

**Parameters:**

Name | Type |
------ | ------ |
`inboxId?` | string |
`timeout?` | number |
`unreadOnly?` | boolean |

**Returns:** *Promise‹[Email](../interfaces/_generated_api_.email.md)›*

___

###  waitForMatchingEmails

▸ **waitForMatchingEmails**(`matchOptions`: [MatchOptions](../interfaces/_generated_api_.matchoptions.md), `count?`: number, `inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean): *Promise‹[EmailPreview](../interfaces/_generated_api_.emailpreview.md)[]›*

*Defined in [src/index.ts:286](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/index.ts#L286)*

Perform a search of emails in an inbox with the given patterns. If results match expected count then return or else retry the search until results are found or timeout is reached. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM. See the `MatchOptions` object for options.

**`summary`** Wait or return list of emails that match simple matching patterns

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`matchOptions` | [MatchOptions](../interfaces/_generated_api_.matchoptions.md) | matchOptions |
`count?` | number | - |
`inboxId?` | string | - |
`timeout?` | number | - |
`unreadOnly?` | boolean | - |

**Returns:** *Promise‹[EmailPreview](../interfaces/_generated_api_.emailpreview.md)[]›*

___

###  waitForNthEmail

▸ **waitForNthEmail**(`inboxId`: string, `index`: number, `timeout?`: number, `unreadOnly?`: boolean): *Promise‹[Email](../interfaces/_generated_api_.email.md)›*

*Defined in [src/index.ts:262](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/index.ts#L262)*

If nth email is already present in inbox then return it. If not hold the connection open until timeout expires or the nth email is received and returned.

**`summary`** Wait for or fetch the email with a given index in the inbox specified

**Parameters:**

Name | Type |
------ | ------ |
`inboxId` | string |
`index` | number |
`timeout?` | number |
`unreadOnly?` | boolean |

**Returns:** *Promise‹[Email](../interfaces/_generated_api_.email.md)›*
