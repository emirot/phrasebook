// Code goes here

var myApp = angular.module('myApp',[]);

var MainController = function ($scope){
   $scope.name = "toto";
   $scope.tab = [];
   $scope.leftinput = "";
  $scope.rightinput = "";
    $scope.j = 0;
  $scope.showContent = function(resultFileParsed){
     $scope.result = resultFileParsed;
     $scope.arrayRes = $scope.result.split("\n");

     for (var x in  $scope.arrayRes){
       $scope.tab.push($scope.arrayRes[x].split(","));
     }


     $scope.leftinput = $scope.tab[0][2];

      console.log("scope1:", $scope.tab);
  };



  $scope.checkCorrect = function(){
    $scope.i  = $scope.tab.length;

    if ($scope.i != $scope.j){

      $scope.lelftinput = scope.tab[$scope.j][2];
      console.log("left:", $scope.tab[$scope.j][2]);
      console.log("right:", $scope.tab[$scope.j][3]);
    if ($scope.rightinput === $scope.tab[$scope.j][3])
    {
        console.log("Good");
        $scope.j++;
    }
    else{
      console.log("Not Good");
    }
    }

  };


};

myApp.directive('onReadFile', function ($parse) {
	return {
		restrict: 'A',
		scope: false,
		link: function(scope, element, attrs) {
            var fn = $parse(attrs.onReadFile);

			element.on('change', function(onChangeEvent) {
				var reader = new FileReader();

				reader.onload = function(onLoadEvent) {
					scope.$apply(function() {
						fn(scope, {$fileContent:onLoadEvent.target.result});
					});
				};

				reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
			});
		}
	};
});


myApp.controller("MainController",["$scope",MainController]);
