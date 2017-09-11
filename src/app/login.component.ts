import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'login';

  constructor(private http: HttpClient) {}

  connect() {

    let params: HttpParams = new HttpParams();
    let clientId = encodeURIComponent('646759497501-g0rqsvkcfpn92ugit4qhadkjpeausq11.apps.googleusercontent.com');
    let redirectUri = encodeURIComponent('http://localhost:4200/auth');
    let scope = encodeURIComponent('https://www.googleapis.com/auth/userinfo.profile');
    let responseType = encodeURIComponent('code');

    let url = 'https://accounts.google.com/o/oauth2/auth?';
    url += "client_id=" + clientId;
    url += "&redirect_uri=" + redirectUri;
    url += "&scope=" + scope;
    url += "&response_type=" + responseType;

    window.location.href = url;
  }
}
