console.log("list");
function ListConfig($stateProvider) {
    'ngInject';
  
    $stateProvider
    .state('app.list', {
      url: '/list/:type',
      controller: 'ListCtrl',
      controllerAs: 'scope',
      templateUrl: 'list/list.html',
      resolve: {
        categorias:function($stateParams){
          // console.log($stateParams.type);
          // return Computerservice.getOne($stateParams.type);
          return $stateParams;
        }
       }
    })

    .state('app.details', {
      url: '/details/:id',
      controller: 'DetailsCtrl',
      controllerAs: 'scope',
      templateUrl: 'list/list.details.html',
      resolve: {
        details:function($stateParams){
          //console.log($stateParams);
          return $stateParams;
        }
      }
    })
    
  };
  
  export default ListConfig;