 export default class Contactservice {
    constructor(AppConstants, $http) {
        'ngInject';
    
        this._AppConstants = AppConstants;
        this._$http = $http;
      }

      sendEmail(dada) {
        console.log(dada);
        return this._$http({ 
         url: 'api/sendmail',
         method:'POST',
         data:dada
        }).then(success)
          .catch(fail);
        function success() {
          return true;
        } 
        function fail() {
          return false;
        }
      }
      
}
