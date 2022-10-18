import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Continent } from '../continent';
import { ContinentService } from '../continent.service';

@Component({
  selector: 'app-continent-list',
  templateUrl: './continent-list.component.html',
  styleUrls: ['./continent-list.component.css']
})
export class ContinentListComponent implements OnInit {

  continents!: Continent[];
  _id!: number;
  squery!: string; //search
  isLoading = true;
  color = 'primary';
  mode = 'determinate';
  value = 50;
  displayedColumns = ['code', 'name'];

  constructor(private continentService: ContinentService, private router: Router,) { }

  ngOnInit() {

    this.continentService.getContinents().subscribe(data => {
      console.log(data);
      this.continents = data;
      this.isLoading = false;
    })
  }

  addContinent() {
    this.router.navigate(['add']);
  }

  search() {

    this.continentService.getContinent(this.squery).subscribe(data => {
      console.log(data);
      this.continents = data;
      this.isLoading = false;
    })

  }



}