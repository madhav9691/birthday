 var app=angular.module('birthdayApp',[]);
app.controller('MyCtrl',['$scope', '$http',function($scope,$http) {

$scope.birthdays=[];
	$http({
		method:'GET',
		url:'/getdetailes'

	}).then(function success(response){
		// console.log(req.body);
		console.log(response.data);
		// alert("retrive success");
		// $scope.birthdays=
		$scope.birthdays=response.data;
	},function error(response){
		console.log(response.data)
		alert('faild to retrivedata');
	})

	$scope.sendmail=function(birth){
		console.log($scope.birth);
		$http({
			method:"POST",
			url:'/postbirthday',
			data:$scope.birth
		}).then(function success(response){
			alert('inserted succesfully');

			$scope.birth={}

		},function error(response){
			alert('faild to sent wishes');
		});
	}

}])