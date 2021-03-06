import { BookService } from './../../services/book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/common/book';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-book-list',
  //templateUrl: './book-list.component.html',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
books: Book[]=[];
currentCategoryId : number;
searchMode : boolean;

  constructor(private _bookservice: BookService, private _activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    //this.listBooks();
    this._activatedRoute.paramMap.subscribe(()=>{
      this.listBooks();
    })
  }
 listBooks(){
   this.searchMode = this._activatedRoute.snapshot.paramMap.has('keyword');

   if(this.searchMode){
     //do search work
     this.handleSearchBooks();
   }else{
     //display book list on category
     this.handleListBooks();
   }
  
 }

 handleListBooks(){
  const hasCategoryId : boolean = this._activatedRoute.snapshot.paramMap.has('id');

  if(hasCategoryId){
    this.currentCategoryId = +this._activatedRoute.snapshot.paramMap.get('id');
  }else{
    this.currentCategoryId = 1;
  }

   this._bookservice.getBooks(this.currentCategoryId).subscribe(
     data => this.books = data
   )

 }

 handleSearchBooks(){
   const keyword:string =this._activatedRoute.snapshot.paramMap.get('keyword');

   this._bookservice.searchBooks(keyword).subscribe(
     data => this.books = data
   )
   
}

}
