import { Component, OnInit } from '@angular/core';
import { AskUsSearchService } from '../../services/ask-us-search.service';
import { faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ask-us-search',
  templateUrl: './ask-us-search.component.html',
  styleUrls: ['./ask-us-search.component.scss']
})
export class AskUsSearchComponent implements OnInit {

  public placeholderQuery : string;
  public faSearch : IconDefinition = faSearch;

  constructor(private askUs : AskUsSearchService) {
    this.placeholderQuery = askUs.getRandomQuery()
  }

  ngOnInit() {
  }

}
