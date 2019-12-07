[MailSlurp JS](../README.md) › [Globals](../globals.md) › [MailSlurp](mailslurp.md)

# Class: MailSlurp

Official MailSlurp Client

 This is the recommended client for [mailslurp.com](https://www.mailslurp.com).

 ## Features

 - Create email addresses on demand
 - Receive emails and attachments in code
 - Send emails and attachments
 - Create custom domains and webhooks

 ## Prerequisites

 MailSlurp is free for personal use but you must have an [account](https://app.mailslurp.com) and an [API Key](https://app.mailslurp.com).

 ## Installing

 `npm install --save mailslurp-client`

 ## Importing

 ### Import ES6

````typescript
import { MailSlurp } from "mailslurp-client"
```

 ### Require ES5

 ````typescript
const MailSlurp = require('mailslurp-client').MailSlurp;
// or default import
const MailSlurp = require('mailslurp-client').default;
```

 ## Configure

 ```typescript
const mailslurp = new MailSlurp({ apiKey: "your-api-key" })
```

 ## Next steps

 ### Creating an inbox
 ```typescript
// generate a random email address ending in `@mailslurp.com`
try {
  const randomizedInbox = await mailslurp.createInbox();
} catch (e) {
  // handle errors
}

// generate specifc email address ending in `@<yourdomain>`
// note you must verify the domain with MailSlurp before 
// you can create email addresses using it
try {
  const customInbox = await mailslurp.createInbox('myaddress@mydomain.com');
} catch (e) {
  // handle errors
}
```

 ### Sending an email
 ```typescript
try {
  await mailslurp.sendEmail(inboxId, { 
    to: ['test@example.com'], 
    subject: 'Welcome',
    body: 'Hello!' 
  })
} catch (e) {
  // handle errors
}
```

 ### Listing emails in an inbox
 

## Hierarchy

* **MailSlurp**

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

## Constructors

###  constructor

\+ **new MailSlurp**(`opts`: [Config](../globals.md#config)): *[MailSlurp](mailslurp.md)*

*Defined in [index.ts:129](https://github.com/mailslurp/mailslurp-client-ts-js/blob/32db155/index.ts#L129)*

Create a new MailSlurp instance

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`opts` | [Config](../globals.md#config) |   |

**Returns:** *[MailSlurp](mailslurp.md)*

## Methods

###  bulkCreateInboxes

▸ **bulkCreateInboxes**(`count`: number): *Promise‹Inbox[]›*

*Defined in [index.ts:473](https://github.com/mailslurp/mailslurp-client-ts-js/blob/32db155/index.ts#L473)*

Bulk create inboxes

**Parameters:**

Name | Type |
------ | ------ |
`count` | number |

**Returns:** *Promise‹Inbox[]›*

___

###  bulkDeleteInboxes

▸ **bulkDeleteInboxes**(`inboxIds`: string[]): *Promise‹Response›*

*Defined in [index.ts:482](https://github.com/mailslurp/mailslurp-client-ts-js/blob/32db155/index.ts#L482)*

Bulk delete inboxes

**Parameters:**

Name | Type |
------ | ------ |
`inboxIds` | string[] |

**Returns:** *Promise‹Response›*

___

###  bulkSendEmails

▸ **bulkSendEmails**(`bulkSendEmailOptions`: BulkSendEmailOptions): *Promise‹Response›*

*Defined in [index.ts:462](https://github.com/mailslurp/mailslurp-client-ts-js/blob/32db155/index.ts#L462)*

Bulk send emails

**Parameters:**

Name | Type |
------ | ------ |
`bulkSendEmailOptions` | BulkSendEmailOptions |

**Returns:** *Promise‹Response›*

___

###  createDomain

▸ **createDomain**(`options`: CreateDomainOptions): *Promise‹DomainPlusVerificationRecordsAndStatus›*

*Defined in [index.ts:562](https://github.com/mailslurp/mailslurp-client-ts-js/blob/32db155/index.ts#L562)*

Create a custom domain for use with MailSlurp
You must own and have access to DNS setup for the domain in order to verify it

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | CreateDomainOptions |   |

**Returns:** *Promise‹DomainPlusVerificationRecordsAndStatus›*

___

###  createInbox

▸ **createInbox**(`emailAddress?`: string): *Promise‹Inbox›*

*Defined in [index.ts:338](https://github.com/mailslurp/mailslurp-client-ts-js/blob/32db155/index.ts#L338)*

Create an inbox. Pass an optional `emailAddress` to specify the email address. If not argument is passed
MailSlurp will assign the inbox a random email address ending in `@mailslurp.com`.

```typescript
// generate a random email address ending in `@mailslurp.com`
try {
  const randomizedInbox = await mailslurp.createInbox();
} catch (e) {
  // handle errors
}

// generate specifc email address ending in `@<yourdomain>`
// note you must verify the domain with MailSlurp before 
// you can create email addresses using it
try {
  const customInbox = await mailslurp.createInbox('myaddress@mydomain.com');
} catch (e) {
  // handle errors
}
```

**Parameters:**

Name | Type |
------ | ------ |
`emailAddress?` | string |

**Returns:** *Promise‹Inbox›*

___

###  createNewEmailAddress

▸ **createNewEmailAddress**(): *Promise‹Inbox›*

*Defined in [index.ts:164](https://github.com/mailslurp/mailslurp-client-ts-js/blob/32db155/index.ts#L164)*

Create a new inbox

```typescript
const { id, emailAddress } = await mailslurp.createNewEmailAddress()
```

**Returns:** *Promise‹Inbox›*

___

###  createWebhook

▸ **createWebhook**(`inboxId`: string, `createWebhookOptions`: CreateWebhookOptions): *Promise‹Webhook›*

*Defined in [index.ts:491](https://github.com/mailslurp/mailslurp-client-ts-js/blob/32db155/index.ts#L491)*

Create a webhook for notifications

**Parameters:**

Name | Type |
------ | ------ |
`inboxId` | string |
`createWebhookOptions` | CreateWebhookOptions |

**Returns:** *Promise‹Webhook›*

___

###  deleteDomain

▸ **deleteDomain**(`domainId`: string): *Promise‹Response›*

*Defined in [index.ts:589](https://github.com/mailslurp/mailslurp-client-ts-js/blob/32db155/index.ts#L589)*

Delete domain

**Parameters:**

Name | Type |
------ | ------ |
`domainId` | string |

**Returns:** *Promise‹Response›*

___

###  deleteEmail

▸ **deleteEmail**(`emailId`: string): *Promise‹Response›*

*Defined in [index.ts:316](https://github.com/mailslurp/mailslurp-client-ts-js/blob/32db155/index.ts#L316)*

Delete an email by id

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string |   |

**Returns:** *Promise‹Response›*

___

###  deleteEmailAddress

▸ **deleteEmailAddress**(`emailId`: string): *Promise‹Response›*

*Defined in [index.ts:326](https://github.com/mailslurp/mailslurp-client-ts-js/blob/32db155/index.ts#L326)*

Delete an email by id

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string |   |

**Returns:** *Promise‹Response›*

___

###  deleteInbox

▸ **deleteInbox**(`inboxId`: string): *Promise‹Response›*

*Defined in [index.ts:348](https://github.com/mailslurp/mailslurp-client-ts-js/blob/32db155/index.ts#L348)*

Delete an inbox by id

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string |   |

**Returns:** *Promise‹Response›*

___

###  deleteWebhook

▸ **deleteWebhook**(`inboxId`: string, `webhookId`: string): *Promise‹Response›*

*Defined in [index.ts:515](https://github.com/mailslurp/mailslurp-client-ts-js/blob/32db155/index.ts#L515)*

Remove a webhook from an inbox

**Parameters:**

Name | Type |
------ | ------ |
`inboxId` | string |
`webhookId` | string |

**Returns:** *Promise‹Response›*

___

###  downloadAttachment

▸ **downloadAttachment**(`emailId`: string, `attachmentId`: string): *Promise‹Response›*

*Defined in [index.ts:526](https://github.com/mailslurp/mailslurp-client-ts-js/blob/32db155/index.ts#L526)*

Get email attachment by id

Returns HTTP response containing byte stream

**Parameters:**

Name | Type |
------ | ------ |
`emailId` | string |
`attachmentId` | string |

**Returns:** *Promise‹Response›*

___

###  emptyInbox

▸ **emptyInbox**(`inboxId`: string): *Promise‹Response›*

*Defined in [index.ts:306](https://github.com/mailslurp/mailslurp-client-ts-js/blob/32db155/index.ts#L306)*

Delete all emails in a given inbox

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string |   |

**Returns:** *Promise‹Response›*

___

###  getAllEmails

▸ **getAllEmails**(`page?`: number, `size?`: number): *Promise‹PageEmailProjection›*

*Defined in [index.ts:390](https://github.com/mailslurp/mailslurp-client-ts-js/blob/32db155/index.ts#L390)*

Get all emails
Returns paginated email previews

**Parameters:**

Name | Type |
------ | ------ |
`page?` | number |
`size?` | number |

**Returns:** *Promise‹PageEmailProjection›*

___

###  getAllInboxes

▸ **getAllInboxes**(`page?`: number, `size?`: number): *Promise‹PageInboxProjection›*

*Defined in [index.ts:380](https://github.com/mailslurp/mailslurp-client-ts-js/blob/32db155/index.ts#L380)*

Get all inboxes paginated
Returns paginated inbox previews

**Parameters:**

Name | Type |
------ | ------ |
`page?` | number |
`size?` | number |

**Returns:** *Promise‹PageInboxProjection›*

___

###  getAttachmentMetaData

▸ **getAttachmentMetaData**(`attachmentId`: string, `emailId`: string): *Promise‹AttachmentMetaData›*

*Defined in [index.ts:551](https://github.com/mailslurp/mailslurp-client-ts-js/blob/32db155/index.ts#L551)*

Get attachment MetaData

MetaData includes name, size (bytes) and content-type.

**Parameters:**

Name | Type |
------ | ------ |
`attachmentId` | string |
`emailId` | string |

**Returns:** *Promise‹AttachmentMetaData›*

___

###  getDomain

▸ **getDomain**(`domainId`: string): *Promise‹DomainPlusVerificationRecordsAndStatus›*

*Defined in [index.ts:580](https://github.com/mailslurp/mailslurp-client-ts-js/blob/32db155/index.ts#L580)*

Get domain

**Parameters:**

Name | Type |
------ | ------ |
`domainId` | string |

**Returns:** *Promise‹DomainPlusVerificationRecordsAndStatus›*

___

###  getDomains

▸ **getDomains**(): *Promise‹Array‹DomainPreview››*

*Defined in [index.ts:571](https://github.com/mailslurp/mailslurp-client-ts-js/blob/32db155/index.ts#L571)*

Get domains

**Returns:** *Promise‹Array‹DomainPreview››*

___

###  getEmail

▸ **getEmail**(`emailId`: string): *Promise‹Email›*

*Defined in [index.ts:427](https://github.com/mailslurp/mailslurp-client-ts-js/blob/32db155/index.ts#L427)*

Get a full email from by id. To get an emails ID use the getEmails or waitFor methods with an inbox

```typescript
try {
    const fullEmail = mailslurp.getEmail(emailId)
    console.log(fullEmail.body, fullEmail.subject) // etc
} catch (e) {
    // handle errors
}
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string |   |

**Returns:** *Promise‹Email›*

___

###  getEmails

▸ **getEmails**(`inboxId`: string, `args`: [GetMessagesOptions](../globals.md#getmessagesoptions)): *Promise‹EmailPreview[]›*

*Defined in [index.ts:404](https://github.com/mailslurp/mailslurp-client-ts-js/blob/32db155/index.ts#L404)*

Get all emails in an inbox as EmailPreviews. To get the full email, use the getEmail endpoint

```typescript
try {
    // first get email previews for an inbox
    const emails = mailslurp.getEmails(inboxId, { limit: 1 })

    // then get the full email by id
    const fullEmail = mailslurp.getEmail(emails[0].id)

    console.log(fullEmail.body, fullEmail.subject) // etc
} catch (e) {
    // handle errors
}
```

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`inboxId` | string | - | - |
`args` | [GetMessagesOptions](../globals.md#getmessagesoptions) |  {} |   |

**Returns:** *Promise‹EmailPreview[]›*

___

###  getInbox

▸ **getInbox**(`inboxId`: string): *Promise‹Inbox›*

*Defined in [index.ts:358](https://github.com/mailslurp/mailslurp-client-ts-js/blob/32db155/index.ts#L358)*

Get an inbox by id

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string |   |

**Returns:** *Promise‹Inbox›*

___

###  getInboxes

▸ **getInboxes**(): *Promise‹Inbox[]›*

*Defined in [index.ts:369](https://github.com/mailslurp/mailslurp-client-ts-js/blob/32db155/index.ts#L369)*

Get all inboxes

```typescript
try {
  const inboxes = await mailslurp.getInboxes()
} catch (e) {
  // handle errors
}
```

**Returns:** *Promise‹Inbox[]›*

___

###  getRawEmail

▸ **getRawEmail**(`emailId`: string): *Promise‹string›*

*Defined in [index.ts:437](https://github.com/mailslurp/mailslurp-client-ts-js/blob/32db155/index.ts#L437)*

Get an email's raw contents from by id

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string |   |

**Returns:** *Promise‹string›*

___

###  getWebhooks

▸ **getWebhooks**(`inboxId`: string): *Promise‹Webhook[]›*

*Defined in [index.ts:504](https://github.com/mailslurp/mailslurp-client-ts-js/blob/32db155/index.ts#L504)*

Get webhooks for an inbox

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string |   |

**Returns:** *Promise‹Webhook[]›*

___

###  sendEmail

▸ **sendEmail**(`inboxId`: string, `sendEmailOptions`: SendEmailOptions): *Promise‹Response›*

*Defined in [index.ts:450](https://github.com/mailslurp/mailslurp-client-ts-js/blob/32db155/index.ts#L450)*

Send and email from a given inbox

```typescript
try {
  await mailslurp.sendEmail(inboxId, { 
    to: ['test@example.com'], 
    subject: 'Welcome',
    body: 'Hello!' 
  })
} catch (e) {
  // handle errors
}
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | - |
`sendEmailOptions` | SendEmailOptions |   |

**Returns:** *Promise‹Response›*

___

###  sendEmailSimple

▸ **sendEmailSimple**(`sendEmailOptions`: SendEmailOptions): *Promise‹Response›*

*Defined in [index.ts:178](https://github.com/mailslurp/mailslurp-client-ts-js/blob/32db155/index.ts#L178)*

Send an email from a random address

To send from a known address first create an inbox and then use
the sendEmail endpoints.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`sendEmailOptions` | SendEmailOptions |   |

**Returns:** *Promise‹Response›*

___

###  uploadAttachment

▸ **uploadAttachment**(`options`: UploadAttachmentOptions): *Promise‹Array‹String››*

*Defined in [index.ts:540](https://github.com/mailslurp/mailslurp-client-ts-js/blob/32db155/index.ts#L540)*

Upload an attachment for use in email sending

Attachment contents must be a base64 encoded string

**Parameters:**

Name | Type |
------ | ------ |
`options` | UploadAttachmentOptions |

**Returns:** *Promise‹Array‹String››*

___

###  waitForEmailCount

▸ **waitForEmailCount**(`count?`: number, `inboxId?`: string, `timeout?`: number): *Promise‹EmailPreview[]›*

*Defined in [index.ts:292](https://github.com/mailslurp/mailslurp-client-ts-js/blob/32db155/index.ts#L292)*

Wait for and return list of emails with length of given count

```typescript
try {
  // wait for 4 emails in an inbox then return them
  const emails = waitForEmailCount(4, inboxId)
} catch (e) {
  // handle error or timeout
}
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`count?` | number | - |
`inboxId?` | string | - |
`timeout?` | number |   |

**Returns:** *Promise‹EmailPreview[]›*

___

###  waitForLatestEmail

▸ **waitForLatestEmail**(`inboxId?`: string, `timeout?`: number): *Promise‹Email›*

*Defined in [index.ts:201](https://github.com/mailslurp/mailslurp-client-ts-js/blob/32db155/index.ts#L201)*

Wait for an email to arrive at an inbox or return first found result
Retries the call until at least one email is found or a maximum timeout is exceeded

```typescript
try {
  const email = await mailslurp.waitForLatestEmail(inboxId)
} catch (e) {
  // handle timeout or email wasn't received
}
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId?` | string | uuid |
`timeout?` | number | max milliseconds to wait  |

**Returns:** *Promise‹Email›*

___

###  waitForMatchingEmails

▸ **waitForMatchingEmails**(`matchOptions`: MatchOptions, `count?`: number, `inboxId?`: string, `timeout?`: number): *Promise‹EmailPreview[]›*

*Defined in [index.ts:260](https://github.com/mailslurp/mailslurp-client-ts-js/blob/32db155/index.ts#L260)*

Wait until both count and match options are met and return list of emails. Match options are a bit verbose but allow
for type safety on the API end. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM.

```typescript
try {
  const matchingWelcomeEmails = await mailslurp.waitForMatchingEmails({
    matches: [
      {
        field: 'SUBJECT',
        should: 'CONTAIN',
        value: 'Welcome'
      }
    ]
  }, 1, inboxId)
} catch (e) {
  // handle timeout or no results
}
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`matchOptions` | MatchOptions | - |
`count?` | number | - |
`inboxId?` | string | - |
`timeout?` | number | timeout max milliseconds to wait  |

**Returns:** *Promise‹EmailPreview[]›*

___

###  waitForNthEmail

▸ **waitForNthEmail**(`inboxId`: string, `index`: number, `timeout?`: number): *Promise‹Email›*

*Defined in [index.ts:225](https://github.com/mailslurp/mailslurp-client-ts-js/blob/32db155/index.ts#L225)*

Return or wait for email number `n` in an inbox

```typescript
try {
  const email3 = await mailslurp.waitForNthEmail(inboxId, 3)
} catch (e) {
  // handle timeout or email wasn't received
}
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | - |
`index` | number | - |
`timeout?` | number |   |

**Returns:** *Promise‹Email›*
