import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-farm-create',
  templateUrl: './farm-create.component.html',
  styleUrls: ['./farm-create.component.scss']
})
export class FarmCreateComponent implements OnInit {

  farmForm : FormGroup;
  tract_id = [] = [1,2,3, 4,5,6,7,8,9,10]
  submitText: string = 'Create Farm';

  @ViewChild('newTractId') inputName;
 

  constructor(
    private fb: FormBuilder,
    private toasterService: ToasterService,
  ) { }


  createForm() {
    this.farmForm = this.fb.group({
      name: ['', Validators.required],
      nickname: [''],
      city:  [''],
      _type:  [''],
      _id:  [''],
      property_count:  [''],
      owner_occupied:  [''],
      absent_occupied:  [''],
      tract_id: [''],
      property_exclude:  [''],
      carrier_route: [''],
      history:  [''],
  })
}

  ngOnInit() {
    this.createForm()
    this.farmForm.patchValue({tract_id:this.tract_id})
  }

  close(){

    console.log(this.farmForm.value)

  }

  remove(tractId: any){

    console.log(tractId)
    console.log('Items Selected : ' +tractId.length)
    for (let i = 0; i < tractId.length; i++) {
     
      console.log('Value Selected : ' + tractId[i]._value)
      this.RemoveElementFromStringArray(tractId[i]._value)
    }


   
  }

  removeTractId(tractId: string) {
    console.log('Remove : ' + tractId)

  }

  print(demo: any){

    console.log(demo.value)

  }

  addItemToTracts(item: number)
  {
    if (this.tract_id.indexOf(Number(item)) === -1) {
      this.tract_id.push(Number(item));
      this.toasterService.pop('success', 'Success!', 'Tract Id Added');
      this.inputName.nativeElement.value = ''
    } else {
      this.toasterService.pop('error', 'Tract alreaduy in db');
     
    }
    
  }


  RemoveElementFromStringArray(key: string) {
    console.log('Item to remove :' + key)
  
    this.tract_id.forEach((value: any,index: number)=>{
      if(value ==key){


        this.tract_id.splice(index,1);
        this.toasterService.pop('success', 'Success!', 'Tract Id ' + key + ' deleted');

      }
  });
}

}
