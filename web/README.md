```bash
Please report this full log at https://github.com/Medium/phantomjs
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@^1.0.0 (node_modules\chokidar\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.1.1: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm ERR! Windows_NT 10.0.10240
npm ERR! argv "D:\\Program Files\\nodejs\\node.exe" "D:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js" "install"
npm ERR! node v7.10.0
npm ERR! npm  v4.2.0
npm ERR! code ELIFECYCLE
npm ERR! errno 1

npm ERR! phantomjs-prebuilt@2.1.14 install: `node install.js`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the phantomjs-prebuilt@2.1.14 install script 'node install.js'.
npm ERR! Make sure you have the latest version of node.js and npm installed.
npm ERR! If you do, this is most likely a problem with the phantomjs-prebuilt package,
npm ERR! not with npm itself.
npm ERR! Tell the author that this fails on your system:
npm ERR!     node install.js
npm ERR! You can get information on how to open an issue for this project with:
npm ERR!     npm bugs phantomjs-prebuilt
npm ERR! Or if that isn't available, you can get their info via:
npm ERR!     npm owner ls phantomjs-prebuilt
npm ERR! There is likely additional logging output above.

npm ERR! Please include the following file with any support request:
npm ERR!     C:\Users\97974\AppData\Roaming\npm-cache\_logs\2017-05-05T09_09_41_703Z-debug.log
```
解决方案：
``` bash
npm install phantomjs-prebuilt@2.1.13 --ignore-scripts
```