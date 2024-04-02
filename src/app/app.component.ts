import { Component } from '@angular/core';
import { FileserviceService } from './services/fileservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'file-compressor';
  uploadedFile:string=''
  compressedFile:string=''
  fileName:string='File name: ';

  constructor(private fileService:FileserviceService)
  {

  }

  uploadFile(event:any)
  {
    const file:File = event.target.files[0];
    this.fileService.upload(file).subscribe(
      (upFile)=>
      {
        this.fileName=this.fileName+file.name;
        this.uploadedFile=upFile;
        console.log(this.uploadedFile);
      }
    )
  }

  compressFile()
  {
    this.fileService.compress(this.uploadedFile).subscribe(
      (response)=>
      {
        this.compressedFile=response;
        alert(`${this.compressedFile} has been compressed successfully`);
      }
    )
  }

  downloadFile()
  {
    this.fileService.download(this.compressedFile);
  }

}
