chicQcmAppModule.controller('MainCtrl', [function($scope){
    var self = this;
		self.qcms = [
			{id: 1, label: 'Javascript'},
			{id: 2, label: 'Html 5'},
			{id: 3, label: 'AngularJs'}
		];
    self.selectedQCM = {};

    self.selectQCM = function(qcmSelected){
      self.selectedQCM = qcmSelected;
    }

}]);
