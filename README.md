![MoiBit banner logo](https://raw.githubusercontent.com/moibit/logo-assets/master/logos/moibit-solo-banner.jpg)

# @moibitjs/core

[![npm version](https://badge.fury.io/js/%40moibitjs%2Fcore.svg)](https://badge.fury.io/js/%40moibitjs%2Fcore)
[![Chat on Slack](https://img.shields.io/badge/Slack-MoiBit%20Slack%20community-blue)](https://join.slack.com/t/moibit/signup)
[![Chat on Telegram](https://img.shields.io/badge/Telegram-MoiBit%20Telegram%20community-blue)](https://t.me/moibit)
[![Follow us on Twitter](https://img.shields.io/badge/Twitter-MoiBit%20Twitter-blue?style=social&logo=twitter)](https://twitter.com/moibitio)

Core module of MoiBitJS to interact with [MoiBit](https://www.moibit.io) , a decentralized cloud storage.

This library will help _**authenticated MoiBit Developers**_ to store , read , delete , pin , unpin and get details about a  file/folder using MoiBit as their storage platform

Click [here](https://account.moibit.io) to get your MoiBit credentials. You will be getting **API_KEY , API_SECRET  and a URL**  after successful signup.

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
-  <a  href="#addFile"><code>files.<b>addFile()</b></code></a>
-  <a  href="#addFolder"><code>files.<b>addFolder()</b></code></a>
-  <a  href="#addFileFromFs"><code>files.<b>addFileFromFs()</b></code></a>
-  <a  href="#addFolderFromFs"><code>files.<b>addFolderFromFs()</b></code></a>
-  <a  href="#addNotes"><code>files.<b>addNotes()</b></code></a>
-  <a  href="#pinFile"><code>files.<b>addPin()</b></code></a>
-  <a  href="#filedetail"><code>files.<b>fileStats()</b></code></a>
-  <a  href="#getVersions"><code>files.<b>getVersions()</b></code></a>
-  <a  href="#listFiles"><code>files.<b>list()</b></code></a>
-  <a  href="#mkdir"><code>files.<b>mkdir()</b></code></a>
-  <a  href="#readFile"><code>files.<b>read()</b></code></a>
-  <a  href="#readFromHash"><code>files.<b>readFileByHash()</b></code></a>
-  <a  href="#removeFile"><code>files.<b>remove()</b></code></a>
-  <a  href="#unpinFile"><code>files.<b>removePin()</b></code></a>
-  <a  href="#storageDetails"><code>files.<b>storageDetails()</b></code></a>
---

<a  name="initialize"></a>

#### new MoiBit(url,accessToken)

This constructor is to wrap the files module with a URL and an access token , so that you don't need to send an access token in every call.

-  <code>url</code> the URL you got after signup
-  <code>accessToken</code> is an object with _API_KEY_ and _API_SECRET_ as keys
```js
let files = new MoiBit(<YOUR_URL>,{
	API_KEY : '<YOUR_API_KEY>' ,
	API_SECRET : '<YOUR_API_SECRET>'
});
```

<a  name="addFile"></a>
#### files.addFile(file,path,options)

Adds file of any type to MoiBit

-  <code>file</code> The actual file you are uploading

-  <code>fileName</code> File name or path

-  <code>options</code>

	-  `createFolders` is a boolean value. If it is false and if a path specified in fileName does not exist, the operation will fail. Default:"true" 

	-  `pinVersion` is a boolean value which ensures that the version of the file uploaded won't be unpinned (and become eligible for garbage collection) when another version of the same file is uploaded (in the future). Default:"false"	

```js
await  files.addFile(fileObject,'parent1/folder2/file3.txt');
```

<a name="addFolder"></a>
#### files.addFolder(files,options)

Add a non-empty directory with file(s) and nested non-empty directories inside it. If the path where the directory should be added is not specified, the directory will be added at the root path.

-  <code>dirData</code> The actual non-empty folder you are uploading.

-  <code>path</code> The path where the directory should be uploaded. Default: "/"	

-  <code>options</code>

	-  `pinVersion` is a boolean value which ensures that the version of the file uploaded won't be unpinned (and become eligible for garbage collection) when another version of the same file is uploaded (in the future). Default:"false"	

```js
await  files.addFolder(filesArray,{path:'/testFolder'};
```

<a name="addFileFromFs"></a>
#### files.addFileFromFs(path,options)

This call is meant to work in the node environment. This works similar to <a  href="#addFile"><code>files.<b>addFile()</b></code></a> but the local path of the file needs to be passed instead of passing the file directly

-  <code>path</code> Absolute path from the file system	

```js
await  files.addFileFromFs('local_path_of_the_file',{pinVersion:true};
```

<a name="addFolderFromFs"></a>
#### files.addFolderFromFs(path,options)

This call is meant to work in the node environment. This works similar to <a  href="#addFolder"><code>files.<b>addFolder()</b></code></a> but the local path of the folder need to be passed instead of direct folder

-  <code>path</code> Absolute path from the file system	

```js
await  files.addFolderFromFs('local_path_of_the_folder',{path:'/testFolder'};
```

<a name="addNotes"></a>
#### files.addNotes(notes,path,options)

Write string content to a file. The content of an existing file gets appended to the last byte of the existing content. String content can be added to a new file by setting the create field to true.

-  <code>fileName</code> File name and path
-  <code>text</code> Text or JSON content to add	
-  <code>options</code>
	-`create` ,create a new file if the file to which string content needs to be appended does not exist. Default: "false"	
	- `createFolders` is a boolean value. If this option is set to false and if a path specified in fileName does not exist, the operation will fail. Default:"true" 

	-  `pinVersion` is a boolean value which ensures that the version of the file uploaded won't be unpinned (and become eligible for garbage collection) when another version of the same file is uploaded (in the future). Default:"false"	
	
	
```js
await  files.addNotes('Welcome to MoiBit','/invitation.txt',{create : true};
```

<a  name="pinFile"></a>
#### files.addPin(options)
Pin to keep this version of the file accessible by hash even after a new version of the file is added.


- `options`

	- `hash` The hash of the content requested to pin	

	- `fileName` The name of the file, with the fully qualified path, that you're attempting to pin. Will only pin the latest version of the file.

```js
await files.addPin({hash : 'QmAs...'})
```
<a  name="filedetail"></a>
#### files.fileStats(path)

View the hash, size and parent folder of a file or a folder. Also view the pin status and creation time in case of a file.

```js
await files.fileStats('/2020/sales/employee_salary.txt');
```

<a  name="getVersions"></a>
#### files.getVersions(fileName)

View details of all available versions of a file. The response will show file versions in reverse chronological order. Only files can have versions, not folders.


```js
await files.getVersions('/2020/sales/employee_salary.txt');
```
<a  name="listFiles"></a>
#### files.list(path)

List files and sub-folders in the specified folder.

- `path` The name of the folder with the fully qualified path. Defaults to the root folder ‘/’	

```js
await files.list('/2020/sales');
```

<a name="mkdir"></a>
#### files.mkdir(path)

Create an empty directory. Any folders that are a part of the path - and don't exist - will also be created.


- `path` The fully qualified path at which you're attempting to create a new directory.

```js
await files.mkdir('2020/sales');
```

<a  name="readFile"></a>
#### files.read(fileName,responseType)

Read a file that has been added in given responseType

- `fileName` The name of the file, with the fully qualified path, that you're attempting to read

- `responseType` can be anything among

	- _arraybuffer,document,json,text,stream_

	- _blob - browser only_

```js
await files.read('/2020/sales/employee_salary.txt','blob');
```

<a  name="readFromHash"></a>
#### files.readFileByHash(hash,responseType)

Read a file by its hash in given responseType

- `hash` The hash of the content for the file requested.	

- `responseType` can be anything among

	- _arraybuffer,document,json,text,stream_

	- _blob - browser only_

```js
await files.readFileByHash('Qmbg......','json');
```

<a  name="removeFile"></a>
#### files.remove(path)

Remove a file or folder. In case of a file, only the most recent version of the file will be removed by default. In case of a folder, all the files and nested folders inside it will also be removed.

- `path` The name of the file or folder with the fully qualified path, that you're attempting to remove	
-  <code>options</code>
	-`recursive` Recursively remove directories. Default:"false"
	- `allVersions` Remove all versions of this file. Default:"false"
```js
await files.remove('/2020/sales',{recursive : true});
```  

<a  name="unpinFile"></a>

#### files.removePin(options)
Remove pin to make sure this version of the file is removed when another version of the same file is added. Removing pin also reduces the replication factor of the file.

- `options`

	- `hash` The hash of the content to be unpinned

	- `fileName` The name of the file, with the fully qualified path, that you're attempting to unpin. Will only unpin the latest version of the file.

```js
await files.removePin({filename : '/2020/sales/employee_salary.txt'});
```

<a  name="storageDetails"></a>

#### files.storageDetails(unit)

Returns all the storage details of the particular account (you initialize with) in a specific Unit.

- `unit` is a short hand notation of storage unit. It can be _B,KB,MB,GB,TB(case insensitive)_

```js
await files.storageDetails('mb');
```

## Maintainers

1. [Vuppala Sai Prashanth](https://github.com/its-VSP)
2. [Arunprakash](https://github.com/Arunprakash1414)

## Review and code standards

1. [Ayush Gupta](https://github.com/ayushgupta0610)
2. [Ganesh Prasad Kumble](https://github.com/0zAnd1z)

## Support

If you need more clarifications, feel free to join our Telegram or Slack community channels. You can also write us an email at [hello@moibit.io](mailto:hello@moibit.io) or refer to our [API docs](https://apidocs.moibit.io).

## License

[GNU General Public License v3.0](https://github.com/moibit/core/blob/master/LICENSE)
