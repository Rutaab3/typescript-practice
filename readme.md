## SETUP

1. `node -v` (*check installed Node.js version*)
2. `npm -v` (*check installed npm version*)
3. `npm init -y` (*create package.json with default settings, or run `npm init` to answer questions manually*)
4. `npm install typescript --save-dev` (*install TypeScript compiler as a development dependency*)
5. `npx tsc -v` (*check TypeScript compiler version*)

## Angular Setup

1. `npm install -g @angular/cli` (*install angular cli*)
2. `ng version` OR `npx ng version` (*check the angular cli version*)

## RUN / COMPILE

1. `npx tsc <filename.ts>` (*compile a TypeScript (.ts) file to browser-executable JavaScript (.js) file*)
2. `node <filename.js>` (*execute a JavaScript file using Node.js*)

## BONUS

1. `mkdir <name>` (*create a new directory/folder*)
2. `rmdir <name>` (*remove an empty directory/folder*)
3. `rmdir /s /q <name>` (*remove a directory/folder and all its contents recursively, Windows only*)
4. `cd <location>` (*change the current directory to the specified location*)
5. `cd ..` (*go back one directory level; use `../..` to go up multiple levels*)
6. `echo > <filename.ext>` (*create a new empty file*)
7. `echo {code} > <filename.ext>` (*create a file and add `{code}` content to it*)
8. `del <filename>` (*delete a file, Windows only*)