angular.module('GithubApp').
  
  directive('tabs', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      controller: function($scope, $element) {
        var panes = $scope.panes = [];
 
        $scope.select = function(pane) {
          angular.forEach(panes, function(pane) {
            pane.selected = false;
          });
          pane.selected = true;
        };
 
        this.addPane = function(pane) {
          if (panes.length === 0) $scope.select(pane);
          panes.push(pane);
        };
      },
      templateUrl: 'views/components/tabs.html',
      replace: true
    };
  }).

  directive('pane', function() {
    return {
      require: '^tabs',
      restrict: 'E',
      transclude: true,
      scope: { title: '@' },
      link: function(scope, element, attrs, tabsCtrl) {
        tabsCtrl.addPane(scope);
      },
      templateUrl: 'views/components/pane.html',  
      replace: true
    };
  })
;