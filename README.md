
# @moibitjs/core

[![npm version](https://badge.fury.io/js/%40moibitjs%2Fcore.svg)](https://badge.fury.io/js/%40moibitjs%2Fcore)
[![Chat on Slack](https://img.shields.io/badge/Slack-MoiBit%20Slack%20community-blue)](https://join.slack.com/t/moibit/signup)
[![Chat on Telegram](https://img.shields.io/badge/Telegram-MoiBit%20Telegram%20community-blue)](https://t.me/moibit)
[![Follow us on Twitter](https://img.shields.io/badge/Twitter-MoiBit%20Twitter-blue?style=social&logo=twitter)](https://twitter.com/moibitio)

Core module of MoiBitJS to interact with [MoiBit](https://www.moibit.io) off-chain decentralized storage platform.

This library will help _**Authorized Dapp Developers**_ to store , read , delete , pin , unpin , detail the file(s) using MoiBit as their storage platform

_Click [here](https://account.moibit.io) to get authorized  in MoiBit. You will be getting **API_KEY , API_SECRET , URL**_  after successful signup.

## Install

Using npm:
```bash
npm install --save @moibitjs/core
```

### Getting started

```js
(async  => {
	//import moibit core sdk
	import  MoiBit  from  '@moibitjs/core'
	//create moibit instance
	const  files = new  MoiBit(
		// the url you got after signing up to moibit
		'<your-url>', {
		'API_KEY' : '<your-api-key>', // the api key you got after signing up to moibit
		'API_SECRET' : '<your-api-secret>'  // the api key you got after signing up to moibit
	});
	console.log(await files.storageDetails('GB'));
})()
```

### Functions

-  <a  href="#initialize"><code>new MoiBit()</code></a>
-  <a  href="#addFile"><code>files.<b>add()</b></code></a>
-  <a  href="#readFile"><code>files.<b>read()</b></code></a>
-  <a  href="#readFromHash"><code>files.<b>readFromHash()</b></code></a>
-  <a  href="#listFiles"><code>files.<b>list()</b></code></a>
-  <a  href="#removeFile"><code>files.<b>remove()</b></code></a>
-  <a  href="#pinFile"><code>files.<b>pin()</b></code></a>
-  <a  href="#unpinFile"><code>files.<b>unpin()</b></code></a>
-  <a  href="#filedetail"><code>files.<b>filedetail()</b></code></a>
-  <a  href="#storageDetails"><code>files.<b>storageDetails()</b></code></a>
---

<a  name="initialize"></a>

#### new MoiBit(url,accessToken)

This constructor is to wrap files module with url and access token , so that you don't need to send access token in every call. However authentication will be happen for every call.
-  <code>url</code> DNS/IP address of the node where MoiBit API is running
-  <code>accessToken</code> is an object with _API_KEY_ and _API_SECRET_ as keys
```js
let files = new MoiBit(<YOUR_URL>,{
	API_KEY : '<YOUR_API_KEY>' ,
	API_SECRET : '<YOUR_API_SECRET>'
});
```

<a  name="addFile"></a>

#### files.add(file,path,options)

Adds file of any type to MoiBit and returns back multi-hash of the file.

-  <code>file</code> can be window file object or stream

-  <code>path</code> is an absolute path in your files directory at which you want the file to be inserted.

-  <code>options</code>

	-  `createFolders` is a boolean value which specifies to create a folder/not if it is not existing , that was mentioned in above path attribute (_default : true_)

	-  `pinVersion` is a boolean value which tells to pin the file while adding.(_default : false_)

```js
await  files.add(fileObject,'parent1/folder2/file3.txt'});
```

<a  name="readFile"></a>

#### files.read(path,responseType)

Returns file in mentioned response type from its file name.

**_File modified off-chain_**

- `path` is an absolute path

- `responseType` can be anything among

	- _arraybuffer , document , json , text , stream_

	- _blob - browser only_

```js
await files.read('parent1/folder2/file3.txt','blob');
```

<a  name="readFromHash"></a>

#### files.readFromHash(hash,responseType)

Returns file in mentioned response type from its hash.

- `hash` is multihash of the file

- `responseType` can be anything among

- _arraybuffer , document , json , text , stream_

- _blob - browser only_

  

```js
await files.readFromHash('Qmbg......','json');
```

<a  name="listFiles"></a>

#### files.list(path)

Returns array of files within the folder mentioned.

- `path` is absolute path of the folder, if path is undefined or not mentioned will return all the files in your root folder.

```js
await files.list('parent1/folder2');
```

<a  name="removeFile"></a>

#### files.remove(path)

Removes the file from MoiBit and returns back the acknowledgement

- `path` is absolute path of the file

```js
await files.remove('parent1/folder2/file2.txt');
```  

<a  name="pinFile"></a>

#### files.pin(options)

Pins the file in MoiBit , so that garbage Collector won't collect the file even though the file was not accessed for a long time.

- `options`

- `filename` absolute file name

- `hash` is the multihash of the file

```js
await files.pin({hash : 'QmAs...'})
```

<a  name="unpinFile"></a>

#### files.unpin(options)

Unpins the pinned file in MoiBit , so that garbage Collector got the access to collect the file which was not accessed for a long time.

- `options`

- `filename` absolute file name

- `hash` is the multihash of the file

```js
await files.unpin({filename : 'parent1/folder2/file3.txt'});
```

<a  name="filedetail"></a>

#### files.filedetail(path)

Returns complete detail about the file

```js
await files.filedetail('parent1/folder2/file3.txt');
```

<a  name="storageDetails"></a>

#### files.storageDetails(unit)

Returns all the storage details of the particular account (you did init with) in specific Unit.

- `unit` is a short hand notation of storage unit. It can be _B , KB , MB , GB , TB (case insensitive)_

```js
await files.storageDetails('mb');
```

## Maintainers

1. [Vuppala Sai Prashanth](https://github.com/its-VSP)
2. [Arunprakash](https://github.com/Arunprakash1414)

## Review and code standards

1. Ganesh Prasad Kumble

## Support

If you need more clarifications, feel free to join our Telegram or Slack community channels. You can also write us an email at [hello@moibit.io](mailto:hello@moibit.io)
