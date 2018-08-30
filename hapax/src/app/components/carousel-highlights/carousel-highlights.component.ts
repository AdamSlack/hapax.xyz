import { Component, OnInit, Input } from '@angular/core';
import { CarouselHighlightsService } from '../../services/carousel-highlights.service';
import { ImageObject } from '../../classes/image-object';

@Component({
  selector: 'app-carousel-highlights',
  templateUrl: './carousel-highlights.component.html',
  styleUrls: ['./carousel-highlights.component.scss']
})
export class CarouselHighlightsComponent implements OnInit {

  @Input() carouselName : string;
  @Input() carouselTitle : string;

  private highlightIndex : number = 0;

  private carouselHighlights : Array<ImageObject> = []

  public primaryHighlight : ImageObject;
  public leftSecondaryHighlight : ImageObject;
  public rightSecondaryHighlight : ImageObject;

  constructor(private highlights : CarouselHighlightsService) {
  }

  ngOnInit() {
    this.carouselHighlights = this.highlights.pageImageHighlights[this.carouselName];
    this.highlightIndex = this.carouselHighlights.length - 1;
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
    this.leftSecondaryHighlight = this.carouselHighlights[this.highlightIndex];

    this.highlightIndex = this.incrementHighlightIndex(this.highlightIndex);
    this.primaryHighlight = this.carouselHighlights[this.highlightIndex];

    this.rightSecondaryHighlight = this.carouselHighlights[this.incrementHighlightIndex(this.highlightIndex)];
  }

  public displayPreviousHighlight(){
    console.log(this.highlightIndex);
    this.rightSecondaryHighlight = this.carouselHighlights[this.highlightIndex];

    this.highlightIndex = this.decrimentHighlightIndex(this.highlightIndex);
    this.primaryHighlight = this.carouselHighlights[this.highlightIndex];

    this.leftSecondaryHighlight = this.carouselHighlights[this.decrimentHighlightIndex(this.highlightIndex)];
  }
}
