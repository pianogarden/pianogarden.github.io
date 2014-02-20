/**
 * @description
 * @author tsq <1530234656@qq.com>.
 * @date 14-2-19
 */
myApp.controller('DisplayController', function($scope, TotalDatas, AllInstruments, AllAuthor) {
    $scope.totalDatas = TotalDatas.datas;
    var DISPLAY_COUNT =120;
    var totalData = [];
    $scope.initData = [];
    $scope.tempData = [];
    $scope.init = function() {
        var displayArr = getNumber(DISPLAY_COUNT, $scope.totalDatas.length);
        console.log('displayArr:', displayArr);
        var tempArr = [];
        for (var i = 0; i < displayArr.length; i++) {
            tempArr.push($scope.totalDatas[displayArr[i]]);
            $scope.tempData .push($scope.totalDatas[displayArr[i]]);
        }
        console.log('tempArr:', tempArr);
        $scope.initData = tempArr;
    }
    Array.prototype.contains = function(item){
        return RegExp(item).test(this);
    };
    function getNumber(count, length) {
        var arr = [];
        for (var i = 0; i < count; i++) {
            do {
                var value = Math.floor(Math.random()*length);
                if (arr.contains(value)) {
                    continue;
                }
                arr[i] = value;
            } while(!arr[i]);

        }
        return arr;
    }
    $scope.search = {
        b:'',
        d:'',
        e:''
    };
    $scope.$watch('search.b', function() {
 
        if($scope.search.b) {
            $scope.ininData = $scope.totalDatas;
        } else {
            $scope.ininData = $scope.tempData;
        }
        console.log($scope.ininData.length);
    });
    $scope.$watch('search.d', function() {
 
        if($scope.search.d) {
            $scope.ininData = $scope.totalDatas;
        } else {
            $scope.ininData = $scope.tempData;
        }
        console.log($scope.ininData.length);
    });
    $scope.$watch('search.e', function() {

        if($scope.search.e) {
            $scope.ininData = $scope.totalDatas;
        } else {
            $scope.ininData = $scope.tempData;
        }
 
        console.log($scope.ininData.length);
    });
    $scope.allInstruments = AllInstruments;
    $scope.allAuthor = AllAuthor;
    console.log($scope.allAuthor);
});


// test
/*var DISPLAY_COUNT = 10;
var totalData = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,16,19,20];
var initData = [];
var init = function() {
    var displayArr = getNumber(DISPLAY_COUNT, totalData.length);
    var tempArr = [];
    for (var i = 0; i < displayArr.length; i++) {
        tempArr.push(totalData[displayArr[i]]);
    }
    initData = tempArr;
}
init();
console.log(initData);*/
