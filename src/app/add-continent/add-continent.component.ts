import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Continent } from '../continent';
import { ContinentService } from '../continent.service';

@Component({
  selector: 'app-add-continent',
  templateUrl: './add-continent.component.html',
  styleUrls: ['./add-continent.component.css']
})
export class AddContinentComponent implements OnInit {

  continent: Continent = new Continent();

  submitted = false;

  constructor(private continentService: ContinentService, private router: Router) { }

  ngOnInit() {

  }

  newContinent(): void {
    this.submitted = false;
    this.continent = new Continent();
  }

  save() {
    this.continentService.addContinent(this.continent).
    subscribe({
        next: data => console.log(data),
        error: error => console.log(error)
     });
    this.continent = new Continent();
    this.continentsList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }


  continentsList() {
    this.router.navigate(['']);
  }

}