import { Observable } from 'rxjs/Rx';
import { Http,Response} from '@angular/http';
import { Injectable } from '@angular/core';
//import 'rxjs/add/operator/Map';
 @Injectable()
export class VideoService {

private geturl='/api/videos';
constructor(private _http:Http) { }

getvideos(json)
{
return this._http.get(this.geturl)
.map((response:Response) => response.json());
}


}