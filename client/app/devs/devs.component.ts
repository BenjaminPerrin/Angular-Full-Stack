import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { DevService } from '../services/dev.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { Dev } from '../shared/models/dev.model';

@Component({
  selector: 'app-devs',
  templateUrl: './devs.component.html',
  styleUrls: ['./devs.component.css'],
})
export class DevsComponent implements OnInit {

  dev = new Dev();
  devs: Dev[] = [];
  isLoading = true;
  isEditing = false;

  addDevForm: FormGroup;
  name = new FormControl('', Validators.required);
  age = new FormControl('', Validators.required);
  weight = new FormControl('', Validators.required);

  constructor(private devService: DevService,
              private formBuilder: FormBuilder,
              public toast: ToastComponent) { }

  ngOnInit() {
    this.getDevs();
    this.addDevForm = this.formBuilder.group({
      name: this.name,
      age: this.age,
      weight: this.weight,
    });
  }

  getDevs() {
    this.devService.getDevs().subscribe(
      data => this.devs = data,
      error => console.log(error),
      () => this.isLoading = false,
    );
  }

  addDev() {
    this.devService.addDev(this.addDevForm.value).subscribe(
      (res) => {
        this.devs.push(res);
        this.addDevForm.reset();
        this.toast.setMessage('item added successfully.', 'success');
      },
      error => console.log(error),
    );
  }

  enableEditing(dev: Dev) {
    this.isEditing = true;
    this.dev = dev;
  }

  cancelEditing() {
    this.isEditing = false;
    this.dev = new Dev();
    this.toast.setMessage('item editing cancelled.', 'warning');
    // reload the devs to reset the editing
    this.getDevs();
  }

  editDev(dev: Dev) {
    this.devService.editDev(dev).subscribe(
      () => {
        this.isEditing = false;
        this.dev = dev;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error),
    );
  }

  deleteDev(dev: Dev) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.devService.deleteDev(dev).subscribe(
        () => {
          const pos = this.devs.map(elem => elem._id).indexOf(dev._id);
          this.devs.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error),
      );
    }
  }

}
