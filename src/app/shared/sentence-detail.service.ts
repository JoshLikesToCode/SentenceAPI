import { Injectable } from '@angular/core';
import { SentenceDetail } from './sentence-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SentenceDetailService {

  constructor(private http:HttpClient) { }


  readonly baseURL = 'http://localhost:52178/api/SentenceDetails'
  formData:SentenceDetail = new SentenceDetail();
  list : SentenceDetail[];

  postSentenceDetail(){
    this.formData.caseinsensitive = this.formData.caseinsensitive.toLowerCase();
    if(this.formData.caseinsensitive == 'y' || this.formData.caseinsensitive == 'yes')
    {
      this.formData.sentence = this.formData.sentence.toLowerCase()
      this.formData.pattern = this.formData.pattern.toLocaleLowerCase();
    }
    this.formData.result = this.formData.sentence.split(this.formData.pattern).length - 1;
    return this.http.post(this.baseURL, this.formData);
  }

  refreshList(){
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as SentenceDetail[]);
  }
}
