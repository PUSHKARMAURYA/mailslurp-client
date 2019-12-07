[MailSlurp Client](../README.md) > [SendEmailOptions](../interfaces/sendemailoptions.md)

# Interface: SendEmailOptions

Options for sending an email message from an inbox

*__export__*: 

*__interface__*: SendEmailOptions

## Hierarchy

**SendEmailOptions**

## Index

### Properties

* [attachments](sendemailoptions.md#attachments)
* [bcc](sendemailoptions.md#bcc)
* [body](sendemailoptions.md#body)
* [cc](sendemailoptions.md#cc)
* [charset](sendemailoptions.md#charset)
* [from](sendemailoptions.md#from)
* [html](sendemailoptions.md#html)
* [replyTo](sendemailoptions.md#replyto)
* [subject](sendemailoptions.md#subject)
* [templateVariables](sendemailoptions.md#templatevariables)
* [to](sendemailoptions.md#to)

---

## Properties

<a id="attachments"></a>

### `<Optional>` attachments

**● attachments**: *`Array`<`string`>*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:822*

Optional list of attachment IDs to send with this email. You must first upload each attachment separately in order to obtain attachment IDs

*__type__*: {Array}

*__memberof__*: SendEmailOptions

___
<a id="bcc"></a>

### `<Optional>` bcc

**● bcc**: *`Array`<`string`>*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:828*

Optional list of bcc destination email addresses

*__type__*: {Array}

*__memberof__*: SendEmailOptions

___
<a id="body"></a>

### `<Optional>` body

**● body**: *`undefined` \| `string`*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:834*

Contents of email. If HTML set isHTML to true. You can use moustache templates here if you provide a templateVariables option

*__type__*: {string}

*__memberof__*: SendEmailOptions

___
<a id="cc"></a>

### `<Optional>` cc

**● cc**: *`Array`<`string`>*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:840*

Optional list of cc destination email addresses

*__type__*: {Array}

*__memberof__*: SendEmailOptions

___
<a id="charset"></a>

### `<Optional>` charset

**● charset**: *`undefined` \| `string`*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:846*

Optional charset

*__type__*: {string}

*__memberof__*: SendEmailOptions

___
<a id="from"></a>

### `<Optional>` from

**● from**: *`undefined` \| `string`*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:852*

Optional from address. If not set source inbox address will be used

*__type__*: {string}

*__memberof__*: SendEmailOptions

___
<a id="html"></a>

### `<Optional>` html

**● html**: *`undefined` \| `false` \| `true`*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:858*

*__type__*: {boolean}

*__memberof__*: SendEmailOptions

___
<a id="replyto"></a>

### `<Optional>` replyTo

**● replyTo**: *`undefined` \| `string`*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:864*

Optional replyTo header

*__type__*: {string}

*__memberof__*: SendEmailOptions

___
<a id="subject"></a>

### `<Optional>` subject

**● subject**: *`undefined` \| `string`*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:870*

Optional email subject line

*__type__*: {string}

*__memberof__*: SendEmailOptions

___
<a id="templatevariables"></a>

### `<Optional>` templateVariables

**● templateVariables**: *`any`*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:876*

Optional map of template variables. Will replace moustache syntax variables in subject or body with the associated values

*__type__*: {any}

*__memberof__*: SendEmailOptions

___
<a id="to"></a>

###  to

**● to**: *`Array`<`string`>*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:882*

List of destination email addresses. Even single recipients must be in array form.

*__type__*: {Array}

*__memberof__*: SendEmailOptions

___

