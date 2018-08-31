import { Component, OnInit, Input } from '@angular/core';
import { ImageObject } from '../../classes/image-object';
import { CarouselHighlightsService } from '../../services/carousel-highlights.service';

@Component({
  selector: 'app-focused-highlights',
  templateUrl: './focused-highlights.component.html',
  styleUrls: ['./focused-highlights.component.scss']
})
export class FocusedHighlightsComponent implements OnInit {

  @Input() carouselName : string;


  public selectedHighlight : ImageObject;
  public leftHighlights : Array<ImageObject>;
  public rightHighlights : Array<ImageObject>;

  private highlightIndex : number = 0;

  private carouselHighlights : Array<ImageObject> = []

  constructor(private highlights : CarouselHighlightsService) { }

  ngOnInit() {
    this.carouselHighlights = this.highlights.pageImageHighlights[this.carouselName];
    this.highlightIndex = Math.floor(this.carouselHighlights.length/2) - 1;
    this.displayNextHighlight();
  }

  public incrementHighlightIndex(highlightIndex : number) {
    let incrementedIndex = highlightIndex + 1;
    if(incrementedIndex > this.carouselHighlights.length-1) {
      incrementedIndex = 0;
    }
    return incrementedIndex;
  }

  public decrimentHighlightIndex(highlightIndex : number) {
    let decrimentIndex = highlightIndex - 1;
    if(decrimentIndex < 0) {
      decrimentIndex = this.carouselHighlights.length - 1;
    }
    return decrimentIndex;
  }

  public displayNextHighlight(){
    this.highlightIndex = this.incrementHighlightIndex(this.highlightIndex);
    this.leftHighlights = this.carouselHighlights.slice(0,this.highlightIndex);
    this.rightHighlights = this.carouselHighlights.slice(this.highlightIndex+1);
    this.selectedHighlight = this.carouselHighlights[this.highlightIndex];
  }

  public displayPreviousHighlight(){
    this.highlightIndex = this.decrimentHighlightIndex(this.highlightIndex);
    this.leftHighlights = this.carouselHighlights.slice(0,this.highlightIndex);
    this.rightHighlights = this.carouselHighlights.slice(this.highlightIndex+1);
    this.selectedHighlight = this.carouselHighlights[this.highlightIndex];
  }


}
