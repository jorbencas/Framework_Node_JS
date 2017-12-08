class HomeCtrl {
  constructor(User, Tags, AppConstants, $scope) {
    'ngInject';

    this.appName = AppConstants.appName;
    this._$scope = $scope;

    // Get list of all tags
    Tags
      .getAll()
      .then(
        (tags) => {
          this.tagsLoaded = true;
          //console.log(tags);
          //console.log(User.current);//null
          this.tags = tags
        }
      );

    // Set current list to either feed or all, depending on auth status.
    this.listConfig = {
      type: User.current ? 'feed' : 'all',
    };
  }

  changeList(newList) {
    //console.log(newList);
    this._$scope.$broadcast('setListTo', newList); //ArticleListCtrl: setListTo(newList) -> this.listConfig = newList;
  }
}

export default HomeCtrl;
