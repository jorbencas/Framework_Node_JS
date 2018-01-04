class ListCtrl {
  constructor(User, Computerservice,categorias, AppConstants, $scope) {
    'ngInject';
    this._categorias = categorias;
    this.appName = AppConstants.appName;
    this._$scope = $scope;
    this._Computerservice = Computerservice;
    
    var scope = this;
    scope.computer= [];
    scope.shop=[];
    // console.log(this._categorias);

      this._Computerservice.getAll().then(
        (obj) => {
          obj.computer.forEach(function(param){
            console.log(param.type + categorias.type);
            if ( param.type == categorias.type) {
              scope.computer.push(param);
            }else if (categorias.type == "" ) {
              scope.computer.push(param);
            }
          });
          // console.log(scope.computer);
        }
      );
   }
  }
  
  export default ListCtrl;
  