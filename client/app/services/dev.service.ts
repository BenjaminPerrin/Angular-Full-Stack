import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Dev } from '../shared/models/dev.model';

@Injectable()
export class DevService {

  constructor(private http: HttpClient) { }

  getDevs(): Observable<Dev[]> {
    return this.http.get<Dev[]>('/api/devs');
  }

  countDevs(): Observable<number> {
    return this.http.get<number>('/api/devs/count');
  }

  addDev(dev: Dev): Observable<Dev> {
    return this.http.post<Dev>('/api/dev', dev);
  }

  getDev(dev: Dev): Observable<Dev> {
    return this.http.get<Dev>(`/api/dev/${dev._id}`);
  }

  editDev(dev: Dev): Observable<string> {
    return this.http.put(`/api/dev/${dev._id}`, dev, { responseType: 'text' });
  }

  deleteDev(dev: Dev): Observable<string> {
    return this.http.delete(`/api/dev/${dev._id}`, { responseType: 'text' });
  }

}
