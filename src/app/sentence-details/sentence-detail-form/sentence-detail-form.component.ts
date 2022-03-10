import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SentenceDetail } from 'src/app/shared/sentence-detail.model';
import { SentenceDetailService } from 'src/app/shared/sentence-detail.service';

@Component({
  selector: 'app-sentence-detail-form',
  templateUrl: './sentence-detail-form.component.html',
  styles: [
  ]
})
export class SentenceDetailFormComponent implements OnInit {

  constructor(public service:SentenceDetailService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm) {
    this.insertRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postSentenceDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Submitted succesfully', 'Sentence Detail Registered')
      },
      err => { console.log(err); }
    );
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new SentenceDetail();
  }

}
