export interface ICategory {
  id: number;
  name: string;
  description?: any;
  imageUrl: string;
  createdOn: string;
}

// Generated by https://quicktype.io

export interface CategoryResponse {
  message: string;
  status: string;
  data: ICategory[];
}
