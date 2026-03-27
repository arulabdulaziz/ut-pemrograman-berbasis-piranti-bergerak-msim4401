// Paket-paket yang digunakan
import axios from 'axios';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import * as fs from 'fs/promises';
import * as fsNode from 'fs';
import * as path from 'path';

const HtmlTableToJson = require('html-table-to-json');
import * as validateURI from 'valid-url';

// Menyiapkan berbagai opsi untuk yargs
const argv = yargs(hideBin(process.argv)).options({
  url: {
    alias: 'url',
    demandOption: true,
    description: 'URL yang akan diambil'
  },
  output: {
    alias: 'output',
    default: 'output.txt',
    description: 'Hasil disimpan di file ini'
  }
}).parseSync() as { url: string; output: string };

let url: string = argv.url;
let fhasil: string = argv.output;

// Latihan 1: memeriksa validitas URL
if (!validateURI.isUri(url)) {
  console.log('URL yang Anda masukkan tidak valid');
  process.exit(1);
}

// Latihan 2: memeriksa apakah file sudah ada atau belum
if (fsNode.existsSync(fhasil)) {
  console.log('File sudah ada');
  process.exit(1);
} else {
  console.log('File', fhasil, 'belum ada');
}

// Latihan 3: memeriksa akses direktori tempat file output
try {
  fsNode.accessSync(path.dirname(fhasil), fsNode.constants.R_OK | fsNode.constants.W_OK | fsNode.constants.F_OK);
  console.log('Hak akses direktori OK');
} catch (err) {
  console.log('Hak akses direktori tidak cukup');
  process.exit(1);
}

// Persiapan untuk mengambil file menggunakan axios
const AxiosInstance = axios.create({});
let requestedData: any = '';
let ftype: string = '';
let dataToBeWritten: string = '';
let jsonTables: any;

// Mengambil file
AxiosInstance.get(url)
  .then(response => {
    requestedData = response.data;
    ftype = response.headers['content-type'].substring(0, 9);

    // Jika HTML, maka cari table dan isikan data tabel ke JSON
    if (ftype === 'text/html') {
      jsonTables = HtmlTableToJson.parse(requestedData);
      console.log('Jumlah tabel:', jsonTables.length);

      if (jsonTables.length > 0) {
        dataToBeWritten = JSON.stringify(jsonTables.results, null, 2);
      } else {
        console.log('Tidak ada tabel di HTML, menulis HTML ke file');
        dataToBeWritten = requestedData;
      }
    } else {
      // Jika bukan HTML, langsung ditulis apa adanya
      dataToBeWritten = requestedData;
    }

    // Simpan ke nama file
    (async function (f) {
      try {
        await fs.writeFile(f, dataToBeWritten);
        console.log(`Disimpan ke file ${f}`);
      } catch (error: any) {
        console.log('Error:', error.message);
      }
    })(fhasil);
  })
  .catch(error => {
    console.log('Error saat mengambil URL:', error.message);
  });
