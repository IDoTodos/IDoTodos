(function () {
    "use strict";
    angular
        .module("iDo")
        .controller("GuestList", [GuestList]);

    function GuestList() {
		var vm = this;
		
		vm.showAddPane = false;
		
		vm.inputModel = {
							name: '', 
							plusOne: 1,
							clear: function(){
								this.name = '';
								this.plusOne = 1;
							}
						}
		
		vm.guests = [
							{id: 0, name: 'Rani Moodley', plusOne: 1, attending: 1 },
							{id: 1, name: 'Bavani Moodley', plusOne: 1, attending: 2 }
						];
						
		vm.plusOneOptions = [
			{value: 1, text: 'Yes'},
			{value: 2, text: 'No'}
		]
		
		vm.attendingOptions = [
			{value: 1, text: 'Pending'},
			{value: 2, text: 'Yes'},
			{value: 3, text: 'No'},
			{value: 4, text: 'With Plus One'}
		]
		
		vm.addGuest = function(){

			vm.guests.push({
				id: vm.guests.length, 
				name: vm.inputModel.name, 
				plusOne: vm.inputModel.plusOne, 
				attending: 1
			});
			
			vm.inputModel.clear();
		}
	}
}());






