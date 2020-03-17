[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["lib/models/Inbox"](../modules/_lib_models_inbox_.md) › [Inbox](_lib_models_inbox_.inbox.md)

# Interface: Inbox

Representation of an inbox with an email address. Emails can be sent to or from this email address.

**`export`** 

**`interface`** Inbox

## Hierarchy

* **Inbox**

## Index

### Properties

* [createdAt](_lib_models_inbox_.inbox.md#optional-createdat)
* [description](_lib_models_inbox_.inbox.md#optional-description)
* [emailAddress](_lib_models_inbox_.inbox.md#optional-emailaddress)
* [expiresAt](_lib_models_inbox_.inbox.md#optional-expiresat)
* [favourite](_lib_models_inbox_.inbox.md#optional-favourite)
* [id](_lib_models_inbox_.inbox.md#optional-id)
* [name](_lib_models_inbox_.inbox.md#optional-name)
* [tags](_lib_models_inbox_.inbox.md#optional-tags)
* [userId](_lib_models_inbox_.inbox.md#optional-userid)

## Properties

### `Optional` createdAt

• **createdAt**? : *Date*

*Defined in [src/lib/models/Inbox.ts:27](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/Inbox.ts#L27)*

When was the inbox created

**`type`** {Date}

**`memberof`** Inbox

___

### `Optional` description

• **description**? : *string*

*Defined in [src/lib/models/Inbox.ts:33](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/Inbox.ts#L33)*

Optional description of an inbox for labelling purposes

**`type`** {string}

**`memberof`** Inbox

___

### `Optional` emailAddress

• **emailAddress**? : *string*

*Defined in [src/lib/models/Inbox.ts:39](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/Inbox.ts#L39)*

The inbox\'s email address. Send an email to this address and the inbox will receive and store it for you. To retrieve the email use the Inbox and Email Controller endpoints.

**`type`** {string}

**`memberof`** Inbox

___

### `Optional` expiresAt

• **expiresAt**? : *Date*

*Defined in [src/lib/models/Inbox.ts:45](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/Inbox.ts#L45)*

When, if ever, will the inbox expire and be deleted. If null then this inbox is permanent and the emails in it won\'t be deleted.

**`type`** {Date}

**`memberof`** Inbox

___

### `Optional` favourite

• **favourite**? : *boolean*

*Defined in [src/lib/models/Inbox.ts:51](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/Inbox.ts#L51)*

Is the inbox favourited

**`type`** {boolean}

**`memberof`** Inbox

___

### `Optional` id

• **id**? : *string*

*Defined in [src/lib/models/Inbox.ts:57](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/Inbox.ts#L57)*

ID of the inbox

**`type`** {string}

**`memberof`** Inbox

___

### `Optional` name

• **name**? : *string*

*Defined in [src/lib/models/Inbox.ts:63](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/Inbox.ts#L63)*

Optional name of the inbox. Displayed in the dashboard for easier search

**`type`** {string}

**`memberof`** Inbox

___

### `Optional` tags

• **tags**? : *Array‹string›*

*Defined in [src/lib/models/Inbox.ts:69](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/Inbox.ts#L69)*

Tags that inbox has been tagged with

**`type`** {Array<string>}

**`memberof`** Inbox

___

### `Optional` userId

• **userId**? : *string*

*Defined in [src/lib/models/Inbox.ts:75](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/Inbox.ts#L75)*

ID of user that inbox belongs to

**`type`** {string}

**`memberof`** Inbox
