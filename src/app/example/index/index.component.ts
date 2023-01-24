import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../example.service';
import { Example } from '../example';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  examples: Example[] = [];
  dateToday= new Date();
  dangerClass: any = 'text-dark';
  size: number = 20;

  constructor(public exampleService: ExampleService) { }

  ngOnInit(): void {
    // Pipes
    // this.dateToday = new Date();
    this.exampleService.getAll().subscribe((data: Example[])=>{
      this.examples = data;
      console.log(this.examples);
    });

    setInterval(() => {
      this.dateToday = new Date();
    }, 1000);
  }

  deleteExample(id:number){
    this.exampleService.delete(id).subscribe(res => {
         this.examples = this.examples.filter(item => item.id !== id);
         console.log('Post deleted successfully!');
    })
  }

}
