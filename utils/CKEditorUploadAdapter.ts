// CustomUploadAdapter.ts
import { Loader } from '@ckeditor/ckeditor5-core';
import axios from 'axios';

export default class CKEditorUploadAdapter {
  private loader: Loader;
  private url: string;

  constructor(loader: Loader, url: string) {
    this.loader = loader;
    this.url = url;
  }

  upload(): Promise<{ default: string }> {
    return this.loader.file.then((file: string | Blob) => {
      return new Promise((resolve, reject) => {
        const formData = new FormData();
        formData.append('file', file);

        axios.post(this.url, formData).then((response: { data: { url: any; }; }) => {
          resolve({
            default: response.data.url,
          });
        }).catch((error: any) => {
          reject(error);
        });
      });
    });
  }

  abort(): void {
    // Implement this method if you need to handle aborting the upload
  }
}
