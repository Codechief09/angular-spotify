import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PlaybackStore } from '@angular-spotify/web/shared/data-access/store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'as-album-art-overlay',
  templateUrl: './album-art-overlay.component.html',
  styleUrls: ['./album-art-overlay.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumArtOverlayComponent {
  albumBackgroundImage$ = this.playbackStore.currentTrack$.pipe(
    map((track) => {
      if (!track?.album?.images) {
        return null;
      }
      return track.album.images[0]?.url;
    })
  );

  constructor(private playbackStore: PlaybackStore) {
  }

  getBackgroundUrl(url: string) {
    return `url(${url})`;
  }
}
