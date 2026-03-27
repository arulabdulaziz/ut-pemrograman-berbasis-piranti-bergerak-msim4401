Membuat Aplikasi Command Line Menggunakan Typescript

npm init -y
npm install yargs @types/yargs --save-dev
npm install @types/axios axios
npm i @types/node
npm install html-table-to-json
npm i @types/valid-url valid-url
tsc --init
mkdir dist src

touch src/index.ts

ts-node src/html-json.ts
ts-node src/index.ts --url {url} --output {file-hasil}
  - ts-node src/index.ts --url "https://www.gutenberg.org/ebooks/28496.epub.images?session_id=2b15b981002d3d8e679b3a7b6fa8e2792b7df7d" --output intro-sociology-science.epub

npm run start --url "https://datatables.net/examples/data_sources/dom" --output salary.json