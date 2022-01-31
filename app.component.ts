import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'check';
  public list : Array <any> =[];
  public Activity="";
  public checked : boolean=false;
  public i : number=0;
  public onclick(inp : any)
  {
    if(inp.Activity=="" || inp.Activity==" ")
    {
      alert("Please enter an activity!!!");
      return;
    }
    for(this.i;this.i<this.list.length;this.i++)
    {
      if(this.list[this.i].Activity===inp.Activity)
      {
        alert("You have already added "+inp.Activity+" !!!");
        return;
      }
    }
    
    
    this.list.push(inp);
    
  }
  public reset()
  {
    this.list.length=0;
  }
  public delete(inp : number)
  {
    this.list.splice(inp,1);
  }
}
