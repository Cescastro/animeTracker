import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Anime, MyAnime } from 'src/app/interfaces/api-anime';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-result-anime',
  templateUrl: './result-anime.component.html',
  styleUrls: ['./result-anime.component.css']
})
export class ResultAnimeComponent implements OnInit {

  anime_results: Anime[] = [];
  animeSusbcription: Subscription;

  constructor(private animeService: AnimeService) { }

  ngOnInit(): void {
    this.animeSusbcription = this.animeService.geResultAnime().subscribe(result => {
      this.anime_results = result;
    })
  }

  ngOnDestroy(){
    this.animeSusbcription.unsubscribe();
  }

  addAnime(anime: Anime){
      const addAnim: MyAnime = {
      id: anime.mal_id,
      title: anime.title,
      imagen: anime.images['jpg'].image_url,
      total_episodes: anime.episodes,
      watched_episodes: 0,
    }

    this.animeService.animeSelected(addAnim);
    this.anime_results = [];
  }

}
