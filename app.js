// app.js
angular.module('sortApp', [])

.controller('mainController', function($scope) {
  $scope.sortType     = 'name'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchFish   = '';     // set the default search/filter term
  
  // create the list of sushi rolls 
  $scope.sushi = [
    { name: 'test123', fish: 'Ashok', tastiness: 2 },
    { name: 'Manoj', fish: 'Mahesh', tastiness: 4 },
    { name: 'Ajeeb', fish: 'Harsha, tastiness: 7 },
    { name: 'Shinoj', fish: 'Bharath', tastiness: 6 },
    
    { name: 'Philly1', fish: 'Alok', tastiness: 41 },
    { name: 'Tiger1', fish: 'Manjith', tastiness: 71 },
    { name: 'Rainbow1', fish: 'Variety1', tastiness: 63 },
    { name: 'Philly3', fish: 'Tuna1', tastiness: 43 },
    { name: 'Tiger3', fish: 'Eel1', tastiness: 71 },
    { name: 'Rainbow3', fish: 'Variety1', tastiness: 63 }
  ];
  
});
