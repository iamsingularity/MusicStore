/// <reference path="Catalog.ts" />

module MusicStore.Admin.Catalog {
    interface IAlbumDetailsRouteParams extends ng.route.IRouteParamsService {
        albumId: number;
    }

    interface IAlbumDetailsViewModel {
        album: Models.IAlbum;
        save();
    }

    class AlbumEditController implements IAlbumDetailsViewModel {
        private _albumApi: AlbumApi.IAlbumApiService;

        constructor($routeParams: IAlbumDetailsRouteParams, albumApi: AlbumApi.IAlbumApiService) {
            var viewModel = this,
                albumId = $routeParams.albumId;

            this._albumApi = albumApi;

            albumApi.getAlbumDetails(albumId).then(album => {
                viewModel.album = album;
            });
        }

        public album: Models.IAlbum;

        public save() {
            //this._albumApi.updateAlbum(this.album);
        }
    }

    // TODO: Generate this
    _module.controller("MusicStore.Admin.Catalog.AlbumEditController", [
        "$routeParams",
        "MusicStore.AlbumApi.IAlbumApiService",
        AlbumEditController
    ]);
} 