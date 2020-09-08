import { 
  Component, 
  OnInit, 
  // ChangeDetectorRef,
  Input,
   } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { Film } from '../film';
import { RouterModule, ActivatedRoute, Router} from '@angular/router';
import { AppComponent } from '../app.component';
import { FilmService} from '../film.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {
films: Film[];
form: FormGroup;
payLoad = '';
urlId: number;
  constructor(
    private filmService: FilmService, 
    private route: ActivatedRoute, 
    // private cdRef: ChangeDetectorRef,
    private router: Router
    ) { }
  
  ngOnInit() {
    this.getFilms();
    }
  

    getFilms(): void {   
      this.filmService.getFilms()
        .subscribe(Films => this.films = Films);
  	}  

   
}

