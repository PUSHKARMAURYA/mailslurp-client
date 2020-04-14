[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["generated/api"](../modules/_generated_api_.md) › [WaitForControllerApi](_generated_api_.waitforcontrollerapi.md)

# Class: WaitForControllerApi

WaitForControllerApi - object-oriented interface

**`export`** 

**`class`** WaitForControllerApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](_generated_api_.baseapi.md)

  ↳ **WaitForControllerApi**

## Index

### Constructors

* [constructor](_generated_api_.waitforcontrollerapi.md#constructor)

### Properties

* [basePath](_generated_api_.waitforcontrollerapi.md#protected-basepath)
* [configuration](_generated_api_.waitforcontrollerapi.md#protected-configuration)
* [fetch](_generated_api_.waitforcontrollerapi.md#protected-fetch)

### Methods

* [waitFor](_generated_api_.waitforcontrollerapi.md#waitfor)
* [waitForEmailCount](_generated_api_.waitforcontrollerapi.md#waitforemailcount)
* [waitForLatestEmail](_generated_api_.waitforcontrollerapi.md#waitforlatestemail)
* [waitForMatchingEmail](_generated_api_.waitforcontrollerapi.md#waitformatchingemail)
* [waitForNthEmail](_generated_api_.waitforcontrollerapi.md#waitfornthemail)

## Constructors

###  constructor

\+ **new WaitForControllerApi**(`configuration?`: [Configuration](_generated_configuration_.configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md)): *[WaitForControllerApi](_generated_api_.waitforcontrollerapi.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[constructor](_generated_api_.baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/generated/api.ts#L57)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](_generated_configuration_.configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/_generated_api_.fetchapi.md) |  portableFetch |

**Returns:** *[WaitForControllerApi](_generated_api_.waitforcontrollerapi.md)*

## Properties

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[basePath](_generated_api_.baseapi.md#protected-basepath)*

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/generated/api.ts#L61)*

___

### `Protected` configuration

• **configuration**: *[Configuration](_generated_configuration_.configuration.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[configuration](_generated_api_.baseapi.md#protected-configuration)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/generated/api.ts#L57)*

___

### `Protected` fetch

• **fetch**: *[FetchAPI](../interfaces/_generated_api_.fetchapi.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[fetch](_generated_api_.baseapi.md#protected-fetch)*

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/generated/api.ts#L62)*

## Methods

###  waitFor

▸ **waitFor**(`waitForConditions?`: [WaitForConditions](../modules/_generated_api_.waitforconditions.md), `options?`: any): *Promise‹[EmailPreview](../interfaces/_generated_api_.emailpreview.md)[]›*

*Defined in [src/generated/api.ts:11884](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/generated/api.ts#L11884)*

Generic waitFor method that will wait until an inbox meets given conditions or return immediately if already met

**`summary`** Wait for conditions to be met

**`throws`** {RequiredError}

**`memberof`** WaitForControllerApi

**Parameters:**

Name | Type |
------ | ------ |
`waitForConditions?` | [WaitForConditions](../modules/_generated_api_.waitforconditions.md) |
`options?` | any |

**Returns:** *Promise‹[EmailPreview](../interfaces/_generated_api_.emailpreview.md)[]›*

___

###  waitForEmailCount

▸ **waitForEmailCount**(`count?`: number, `inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean, `options?`: any): *Promise‹[EmailPreview](../interfaces/_generated_api_.emailpreview.md)[]›*

*Defined in [src/generated/api.ts:11902](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/generated/api.ts#L11902)*

If inbox contains count or more emails at time of request then return count worth of emails. If not wait until the count is reached and return those or return an error if timeout is exceeded.

**`summary`** Wait for and return count number of emails

**`throws`** {RequiredError}

**`memberof`** WaitForControllerApi

**Parameters:**

Name | Type |
------ | ------ |
`count?` | number |
`inboxId?` | string |
`timeout?` | number |
`unreadOnly?` | boolean |
`options?` | any |

**Returns:** *Promise‹[EmailPreview](../interfaces/_generated_api_.emailpreview.md)[]›*

___

###  waitForLatestEmail

▸ **waitForLatestEmail**(`inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean, `options?`: any): *Promise‹[Email](../interfaces/_generated_api_.email.md)›*

*Defined in [src/generated/api.ts:11928](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/generated/api.ts#L11928)*

Will return either the last received email or wait for an email to arrive and return that. If you need to wait for an email for a non-empty inbox see the other receive methods such as waitForNthEmail or waitForEmailCount.

**`summary`** Fetch inbox's latest email or if empty wait for an email to arrive

**`throws`** {RequiredError}

**`memberof`** WaitForControllerApi

**Parameters:**

Name | Type |
------ | ------ |
`inboxId?` | string |
`timeout?` | number |
`unreadOnly?` | boolean |
`options?` | any |

**Returns:** *Promise‹[Email](../interfaces/_generated_api_.email.md)›*

___

###  waitForMatchingEmail

▸ **waitForMatchingEmail**(`matchOptions`: [MatchOptions](../interfaces/_generated_api_.matchoptions.md), `count?`: number, `inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean, `options?`: any): *Promise‹[EmailPreview](../interfaces/_generated_api_.emailpreview.md)[]›*

*Defined in [src/generated/api.ts:11954](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/generated/api.ts#L11954)*

Perform a search of emails in an inbox with the given patterns. If results match expected count then return or else retry the search until results are found or timeout is reached. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM. See the `MatchOptions` object for options.

**`summary`** Wait or return list of emails that match simple matching patterns

**`throws`** {RequiredError}

**`memberof`** WaitForControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`matchOptions` | [MatchOptions](../interfaces/_generated_api_.matchoptions.md) | matchOptions |
`count?` | number | - |
`inboxId?` | string | - |
`timeout?` | number | - |
`unreadOnly?` | boolean | - |
`options?` | any | - |

**Returns:** *Promise‹[EmailPreview](../interfaces/_generated_api_.emailpreview.md)[]›*

___

###  waitForNthEmail

▸ **waitForNthEmail**(`inboxId?`: string, `index?`: number, `timeout?`: number, `unreadOnly?`: boolean, `options?`: any): *Promise‹[Email](../interfaces/_generated_api_.email.md)›*

*Defined in [src/generated/api.ts:11983](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/generated/api.ts#L11983)*

If nth email is already present in inbox then return it. If not hold the connection open until timeout expires or the nth email is received and returned.

**`summary`** Wait for or fetch the email with a given index in the inbox specified

**`throws`** {RequiredError}

**`memberof`** WaitForControllerApi

**Parameters:**

Name | Type |
------ | ------ |
`inboxId?` | string |
`index?` | number |
`timeout?` | number |
`unreadOnly?` | boolean |
`options?` | any |

**Returns:** *Promise‹[Email](../interfaces/_generated_api_.email.md)›*
