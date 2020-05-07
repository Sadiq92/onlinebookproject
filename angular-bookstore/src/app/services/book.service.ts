import { BookCategory } from './../common/book-category';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  map } from 'rxjs/operators';
import { Book } from '../common/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl = "http://localhost:8686/api/v1/books/";
  private categoryUrl = "http://localhost:8686/api/v1/book-category";

  constructor(private httpClient : HttpClient) { }



  getBooks(theCategoryId : number) : Observable<Book[]>{
    const searchUrl = `${this.baseUrl}/search/categoryid?id=${theCategoryId}`;
    return this.getBookLists(searchUrl);    

  }

  private getBookLists(searchUrl: string): Observable<Book[]> {
    return this.httpClient.get<GetResponseBooks>(searchUrl).pipe(map(response => response._embedded.books));
  }

  getBookCategories(): Observable<BookCategory[]>{
    //const searchUrl = `${this.baseUrl}/search/categoryid?id=${theCategoryId}`;
    return this.httpClient.get<GetResponseBookCategory>(this.categoryUrl).pipe(
      map(response => response._embedded.bookCategory)
      );    


  }

  searchBooks(keyword : string) : Observable<Book[]>{
    const searchUrl = `${this.baseUrl}/search/searchbykeyword?name=${keyword}`;
    return this.getBookLists(searchUrl);  

  }

}


  interface GetResponseBooks{
    _embedded : {
      books : Book[];
    }
}

interface GetResponseBookCategory{
  _embedded : {
    bookCategory : BookCategory[];
  }
}