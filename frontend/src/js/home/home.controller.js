class HomeCtrl {
  constructor( Computerservice, AppConstants, $scope) {
    'ngInject';

    this.appName = AppConstants.appName;
    this._$scope = $scope;
    this._Computerservice = Computerservice;
    console.log('Hola');
    // Get list of all tags
     this._Computerservice.getAll()
    //  .then(
        // (computers) => {
        //   this.computers = true;
        //   console.log(computers);
        //   //console.log(User.current);//null
        //   this.computers = computers;
        // }
      // );

    // Set current list to either feed or all, depending on auth status.
    
  }


}

export default HomeCtrl;
