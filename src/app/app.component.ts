import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'file-compressor';

  uploadFile()
  {
    alert('upload file');
  }

  mergeFile()
  {
    alert('merge file');
  }

  downloadFile()
  {
    alert('download file');
  }

}
