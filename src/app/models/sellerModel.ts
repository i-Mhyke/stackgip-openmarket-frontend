import { ResponseModel } from "../shared/models/ResponseModel";

export interface ISeller {
    businessName: 'string';
    businessAddress: 'string';
    businessEmail: 'string';
    businessPhone: 'string';
    businessCountryCode: 'string';
    businessState: 'string';
    businessCity: 'string';
    businessLogoUrl: 'string' | string;
    businessRegistrationNumber: 'string';
    address:'string';
    phoneNumber:'string';
}

export interface GetSeller extends ResponseModel {
    data: ISeller;
  }
