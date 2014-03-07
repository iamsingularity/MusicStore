/// <reference path="Home.ts" />

module MusicStore.Store.Home {
    interface IHomeViewModel {
        albums: Array<Models.IAlbum>
    }

    class HomeController implements IHomeViewModel {
        public albums: Array<Models.IAlbum>;

        constructor(albumApi: AlbumApi.IAlbumApiService) {
            var viewModel = this;

            albumApi.getMostPopularAlbums().then(albums => {
                viewModel.albums = albums;
            });
        }
    }

    // TODO: Generate this
    _module.controller("MusicStore.Store.Home.HomeController", [
        "MusicStore.AlbumApi.IAlbumApiService",
        HomeController
    ]);
} 