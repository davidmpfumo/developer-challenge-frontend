import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Pais } from 'src/app/model/pais';
import { PaisService } from 'src/app/service/pais.service';
import * as XLSX from 'xlsx'; 
import { saveAs } from 'file-saver';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-pais-list',
  templateUrl: './pais-list.component.html',
  styleUrls: ['./pais-list.component.css']
})
export class PaisListComponent implements OnInit {

  private _listaPaises: Pais[] = [];

  fileXls= 'ListaTodosPaises.xlsx';  
  fileCSV= 'ListaTodosPaises.csv';  
  fileXML= 'ListaTodosPaises.xml';  
  columns: (string | number)[] | undefined;
  httpClient: any;
  page = 1;
  pageSize = 4;
  collectionSize!: number;
  currentRate = 8;
  name = '';
  paises: Pais = {name: '', capital: '', region: '', subregion: '', population: '', area: '', timezones: '', nativeName: '',flag: ''};
  
  public get listaPaises(): Pais[] {
    return this._listaPaises;
  }
  public set listaPaises(value: Pais[]) {
    this._listaPaises = value;
  }

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
    this.paisService.getAllPaises().subscribe(
      colheitas => this.listaPaises = colheitas      
    );    
  }

  exportexcel(): void 
    {
       /* table id is passed over here */   
       let element = document.getElementById('excel-table'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       XLSX.writeFile(wb, this.fileXls);
			
    }

    exportcsv(): void 
    {
       /* table id is passed over here */   
       let element = document.getElementById('excel-table'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       XLSX.writeFile(wb, this.fileCSV);
			
    }

    searchByName(): void {
      /*let pais = this.listaPaises[0];

      alert('Extrai nome da lista: '+pais.name);

      this.listaPaises = [];


      this.listaPaises.push(pais);

      alert('Testa nova adicao na lista: '+this.listaPaises[0].name);
*/



    this.paisService.getPaisesByName(this.name)
        .subscribe(
          (data: Pais) => {this.paises = data
            alert(`Extrai nome da lista: ${this.paises.name}`);
         });

//          alert('Extrai nome da lista: '+pais);
          
    }
  }
/*
    public downloadXMLFile(){
      var XMLWriter = require('xml-writer'),
               fs = require('fs');
    var ws = fs.createWriteStream('/tmp/foo.xml');
    ws.on('close', function() {
            console.log(fs.readFileSync('/tmp/foo.xml', 'UTF-8'));
    });
    const xw = new XMLWriter(false, function(string: any, encoding: any) {
            ws.write(string, encoding);
    });
    xw.startDocument('1.0', 'UTF-8').startElement(function() {
        return 'root';
    }).text(function() {
        return 'Some content';
    });
    ws.end();
      

    }*/

