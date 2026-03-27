const HtmlTableToJson = require('html-table-to-json');

const htmlContent = `
<p>Tabel 1</p>
<table>
  <tr>
    <th>NIM</th> <th>Nama</th> <th>Alamat</th>
  </tr>
  <tr>
    <td>123456</td> <td>Mahasiswa Satu</td> <td>Alamat Satu</td>
  </tr>
  <tr>
    <td>7891011</td> <td>Mahasiswa Dua</td> <td>Alamat Dua</td>
  </tr>
</table>

<p>Tabel 2</p>
<table>
  <tr>
    <th>NIDN</th> <th>Nama Dosen</th>
  </tr>
  <tr>
    <td>9876</td> <td>Dosen Satu</td>
  </tr>
  <tr>
    <td>98789</td> <td>Dosen Dua</td>
  </tr>
</table>
`;

// Parse HTML menjadi JSON
const jsonTables = HtmlTableToJson.parse(htmlContent);

// Tampilkan jumlah tabel dan hasilnya
console.log('Jumlah tabel:', jsonTables.length); 
console.log(JSON.stringify(jsonTables.results, null, 2));