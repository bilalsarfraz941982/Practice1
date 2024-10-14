(
    function(){
         angular.module("myFirstApp" ,[])
        .controller("myFirstController", MianFunction)
        .filter("ChangeN", Rname)
        .filter("ANumbers" , AddNumbers)
        .filter("NMultiply",numMultiply);

        MianFunction.$inject["$scope","$filter"]

        function MianFunction($scope,$filter,$injector,ChangeNFilter){
           $scope.name = "Bilal";
           $scope.input ="";
           $scope.mode="pizza";
           $scope.directChangeN = "my name is bilal sarfraz"
           
        $scope.Soutput = function(){
            var bb = "";
            return bb
        }

           $scope.ChangeName = function(){
            var aa = "my name is bilal sarfraz";
            var result = ChangeNFilter(aa);
            return result
           };

           $scope.An = function(){
            var aa = "";
            return aa
           }
           

           $scope.change = function(){
            var bb = $scope.input;
            var aa = $filter("uppercase");
            $scope.input  = aa(bb);
            return $scope.input
           };

           $scope.Changep = function(){
            $scope.mode ="burger";
           };

           console.log(MianFunction.toString());
           console.log($injector.annotate(MianFunction))

        };

        function Rname(){
            return function (input){
                input = input.replace("bilal","adeel");
                return input
        }
        };

        function AddNumbers(){
            return function(input ,first , second){
                input = first + second;
                return input
            }
        };

        function numMultiply(){
            return function(input , first , second){
                input = first * second ;
                return input
            }
        }
    }
)();