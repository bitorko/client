import {customElement, inject} from 'aurelia-framework';
import {TournamentStore} from '~/services/tournament';

@customElement('search-bar')
@inject(TournamentStore)
export class SearchBar {
  constructor(tournamentStore) {
    this.tournamentStore = tournamentStore;
  }

  search() {
    let filter = {};
    this.searchText ? filter = { search: {title: this.searchText} } : filter = undefined;
    return this.tournamentStore.setTournaments(filter);
  }
}

