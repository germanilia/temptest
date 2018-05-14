import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private http: HttpClient) {

    this.getVerticals().subscribe((verticals) => {
      console.log('verticals: ', verticals);
    });

  }

  public getVerticals(): Observable<any> {

    return this.http.get('http://rmsiisws:8080/RMS/verticals/');
  }
}
