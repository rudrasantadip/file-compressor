import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileserviceService
{

  constructor(private http: HttpClient) {}
  apiUrl = "http://localhost:8080/file"

  upload(file:any):Observable<any>
  {
    const formData = new FormData();
    formData.append('file',file);

    const options = {
      responseType: 'text' as 'json'
    }

    return this.http.post<any>(`${this.apiUrl}/upload`,formData, options);
  }

  compress(file:string): Observable<any>
  {

    const options = {
      responseType: 'text' as 'json'
    }
    return this.http.get(`${this.apiUrl}/compress/${file}`,options);
  }

  download(file:string):void
  {
    
    this.http.get(`${this.apiUrl}/download/${file}`,
    {
      responseType:'blob',
      headers:new HttpHeaders().append('Content-Type','application/json')
    }
    ).subscribe(
      (response)=>{
        const blob = new Blob([response], { type: 'application/octet-stream' });

      // Create a download link
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);

      // Set the download attribute with the desired filename
      link.setAttribute('download', file);

      // Trigger a click event on the link to initiate download
      document.body.appendChild(link);
      link.click();

      // Cleanup
      document.body.removeChild(link);
      }
    );
  }
}
