import {customElement, inject} from 'aurelia-framework';
import {InstitutionStore} from '~/services/institution';

@customElement('institution-form')
@inject(InstitutionStore)
export class InstitutionForm {
  constructor(institutionStore) {
    this.institutionStore = institutionStore;
  }

  submit(institution) {
    this.institutionStore.createInstitution(institution);
  }
}
