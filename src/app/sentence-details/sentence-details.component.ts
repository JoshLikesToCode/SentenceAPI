import { Component, OnInit } from '@angular/core';
import { SentenceDetail } from '../shared/sentence-detail.model';
import { SentenceDetailService } from '../shared/sentence-detail.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-sentence-details',
  templateUrl: './sentence-details.component.html',
  styles: [
  ]
})
export class SentenceDetailsComponent implements OnInit {

  constructor(public service : SentenceDetailService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: SentenceDetail) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

}
