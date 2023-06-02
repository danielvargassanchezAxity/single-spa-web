import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ConsumeService {
  private httpCounter = 0;

  constructor(private http: HttpClient) {}

  httpGet<T>(url: string, params?: any, headers?: any): Observable<T> {
    let objHeaders = new HttpHeaders();
    if (headers) {
      Object.keys(headers).forEach((key) => {
        objHeaders = objHeaders.append(key, headers[key]);
      });
    }

    let objParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        objParams = objParams.append(key, params[key]);
      });
    }

    // this.dataService.setIsLoading(true);
    return new Observable<T>((observer) => {
      this.http
        .get<any>(url, { headers: objHeaders, params: objParams })
        .subscribe(
          (response) => {
            this.returnResponse(observer, response);
          },
          (err) => {
            this.returnError(observer, err);
          }
        );
    });
  }

  httpPost<T>(url: string, body: any, headers?: any): Observable<T> {
    let objHeaders = new HttpHeaders();
    if (headers) {
      Object.keys(headers).forEach((key) => {
        objHeaders = objHeaders.append(key, headers[key]);
      });
    }

    // this.dataService.setIsLoading(true);
    return new Observable<T>((observer) => {
      this.http.post<any>(url, body, { headers: objHeaders }).subscribe(
        (response) => {
          this.returnResponse(observer, response);
        },
        (err) => {
          this.returnError(observer, err);
        }
      );
    });
  }

  httpPut<T>(url: string, body: any, headers?: any): Observable<T> {
    let objHeaders = new HttpHeaders();
    if (headers) {
      Object.keys(headers).forEach((key) => {
        objHeaders = objHeaders.append(key, headers[key]);
      });
    }

    // this.dataService.setIsLoading(true);
    return new Observable<T>((observer) => {
      this.http.put<any>(url, body, { headers: objHeaders }).subscribe(
        (response) => {
          this.returnResponse(observer, response);
        },
        (err) => {
          this.returnError(observer, err);
        }
      );
    });
  }

  httpDelete<T>(url: string, headers?: any): Observable<T> {
    let objHeaders = new HttpHeaders();
    if (headers) {
      Object.keys(headers).forEach((key) => {
        objHeaders = objHeaders.append(key, headers[key]);
      });
    }

    // this.dataService.setIsLoading(true);
    return new Observable<T>((observer) => {
      this.http.delete<any>(url, { headers: objHeaders }).subscribe(
        (response) => {
          this.returnResponse(observer, response);
        },
        (err) => {
          this.returnError(observer, err);
        }
      );
    });
  }

  httpDeleteWBody<T>(url: string, body: any, headers?: any): Observable<T> {
    let objHeaders = new HttpHeaders();
    if (headers) {
      Object.keys(headers).forEach((key) => {
        objHeaders = objHeaders.append(key, headers[key]);
      });
    }

    // this.dataService.setIsLoading(true);
    return new Observable<T>((observer) => {
      this.http.request('delete', url, { body, headers: objHeaders }).subscribe(
        (response) => {
          this.returnResponse(observer, response);
        },
        (err) => {
          this.returnError(observer, err);
        }
      );
    });
  }

  private returnResponse<T>(observer: Subscriber<T>, response: any): void {
    observer.next(response);
    observer.complete();
    // this.dataService.setIsLoading(false);
  }

  private returnError<T>(observer: Subscriber<T>, error: any): void {
    observer.error(error);
    // this.dataService.setIsLoading(false);
  }

  // httpGet<T>(
  //   url: string,
  //   params?: any,
  //   headers?: any): Observable<T> {
  //   this.httpCounter++;
  //   let objHeaders = new HttpHeaders();
  //   if (headers) {
  //     Object.keys(headers).forEach((key) => {
  //       objHeaders = objHeaders.append(key, headers[key]);
  //     });
  //   }

  //   let objParams = new HttpParams();
  //   if (params) {
  //     Object.keys(params).forEach((key) => {
  //       objParams = objParams.append(key, params[key]);
  //     });
  //   }

  //   // this.observableService.setIsLoading(true);
  //   return new Observable<T>((observer) => {
  //     this.http
  //       .get<any>(url, { headers: objHeaders, params: objParams })
  //       .subscribe(
  //         (response) => {
  //           this.returnResponse(observer, response);
  //         },
  //         (err) => {
  //           this.returnError(observer, err);
  //         }
  //       );
  //   });
  // }

  // httpPost<T>(
  //   url: string,
  //   body: any,
  //   headers?: any
  // ): Observable<T> {
  //   this.httpCounter++;
  //   let objHeaders = new HttpHeaders();
  //   if (headers) {
  //     Object.keys(headers).forEach((key) => {
  //       objHeaders = objHeaders.append(key, headers[key]);
  //     });
  //   }
  //   // this.observableService.setIsLoading(true);
  //   return new Observable<T>((observer) => {
  //     this.http.post<any>(url, body, { headers: objHeaders }).subscribe(
  //       (response) => {
  //         this.returnResponse(observer, response);
  //       },
  //       (err) => {
  //         this.returnError(observer, err);
  //       }
  //     );
  //   });
  // }

  // httpPut<T>(
  //   url: string,
  //   body: any,
  //   headers?: any
  // ): Observable<T> {
  //   this.httpCounter++;
  //   let objHeaders = new HttpHeaders();
  //   if (headers) {
  //     Object.keys(headers).forEach((key) => {
  //       objHeaders = objHeaders.append(key, headers[key]);
  //     });
  //   }
  //   // this.observableService.setIsLoading(true);
  //   return new Observable<T>((observer) => {
  //     this.http.put<any>(url, body, { headers: objHeaders }).subscribe(
  //       (response) => {
  //         this.returnResponse(observer, response);
  //       },
  //       (err) => {
  //         this.returnError(observer, err);
  //       }
  //     );
  //   });
  // }
  // private returnResponse<T>(
  //   observer: Subscriber<T>,
  //   response: any,
  // ): void {
  //   this.handleLoading();
  //   observer.next(response);
  //   observer.complete();
  // }

  // private returnError<T>(
  //   observer: Subscriber<T>,
  //   error: any,
  // ): void {
  //   this.handleLoading();
  //   observer.error(error);
  // }

  // private handleLoading(): void {
  //   this.httpCounter--;
  //   if (this.httpCounter === 0) {
  //     // this.observableService.setIsLoading(false);
  //   }
  // }
}
