import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.scss']
})
export class DetailpageComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
  //  window.location.reload;
   $.getScript('./assets/js/jssor.slider.min.js');
   $.getScript('./assets/js/jsorslider.js');
 
}
}
