(function () {
    var app = angular.module('menu', []);

    app.directive('backSlider', ['$interval', function ($interval) {
        return {
            restrict: 'E',
            templateUrl: 'back.html',
            controller: function () {
                this.current = 0;
                this.myStyle = {'backgroundImage': 'url(bg/1.jpg)'};
                this.bg = ['bg/1.jpg', 'bg/2.jpg', 'bg/3.jpg'];
                this.changeBg = function () {
                    console.log(this);
                    this.current = this.current + 1 >= this.bg.length ? 0 : this.current + 1;
                    this.myStyle['backgroundImage'] = 'url(' + this.bg[this.current] + ')';
                };
                $interval(this.changeBg.bind(this), 10000);
            },
            controllerAs: 'backSlider'
        }
    }]);

    app.directive('leftBar', function () {
        return {
            restrict: 'E',
            templateUrl: 'left-bar.html',
            controller: function () {
                this.current = 1;

                this.isCurrent = function (current) {
                    return this.current === current;
                };

                this.setCurrent = function (current) {
                  this.current = current;
                  console.log(this.current);
                }
            },
            controllerAs: 'leftBar'
        }
    })
})();