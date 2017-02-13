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

		$scope.DefImages = 
		[
			{
				id:1,
				src:"img/1.jpg",
				text:".jpg"
			},
			{
				id:2,
				src:"img/1.png",
				text:".png"
			},
			{
				id:3,
				src:"img/1.gif",
				text:".gif"
			}
		]

		$scope.Extensions = [];

		$scope.Filter = function(ext)
		{ 
			var i = $scope.Extensions.indexOf(ext);
			if (i < 0)
			$scope.Extensions.push(ext);
			else
			$scope.Extensions.splice(i, 1);

			$scope.Images = $scope.DefImages.filter(function(e)
			{
				var x = e.src.length;
				var ex = e.src.substring(x - 3);

				return $scope.Extensions.indexOf(ex) > -1;
			});
		}
	}]
);
