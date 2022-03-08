import { Injectable } from '@angular/core';
import { SentenceDetail } from './sentence-detail.model';

@Injectable({
  providedIn: 'root'
})
export class SentenceDetailService {

  constructor() { }

  formData:SentenceDetail = new SentenceDetail();
}
