angular.module('Module',[])

.controller('IndexController', ['$scope',function($scope)
	{	
		$scope.GetImageSrc = function()
		{
			$scope.picSrc="img/1.jpg";		
		}

		$scope.ClearImageSrc = function()
		{
			$scope.picSrc=null;		
		}

	}]
);