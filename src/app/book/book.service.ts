import { Http, Response, RequestOptions} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Book} from './book';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BookService {

constructor(private _httpService: Http) {}

getAllBooks(): Observable<Book[] > {
     return this._httpService.get('http://localhost:8080/api/book')
     .map((response: Response) => response.json())
            .catch(this.handleError);
    }

private handleError(error: Response) {
    return Observable.throw(error);
 }
}

