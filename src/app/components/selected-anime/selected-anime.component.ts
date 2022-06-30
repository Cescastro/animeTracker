import { Component, OnInit } from '@angular/core';
import { MyAnime } from 'src/app/interfaces/api-anime';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-selected-anime',
  templateUrl: './selected-anime.component.html',
  styleUrls: ['./selected-anime.component.css']
})
export class SelectedAnimeComponent implements OnInit {

  animes_selected: MyAnime[] = [];

  constructor(private animeService: AnimeService) { }

  ngOnInit(): void {

    this.animes_selected = JSON.parse(localStorage.getItem('my anime')) || [];

    this.animeService.getAnimeSelected().subscribe(results =>{     
      this.animes_selected.push(results);
      localStorage.setItem('my anime', JSON.stringify(this.animes_selected));
    })
  }

  increaseWatch(anime: MyAnime){
    anime.watched_episodes++;
    localStorage.setItem('my anime', JSON.stringify(this.animes_selected));
  }

  decreaseWatch(anime: MyAnime){
    anime.watched_episodes--;
    localStorage.setItem('my anime', JSON.stringify(this.animes_selected));
  }

}
