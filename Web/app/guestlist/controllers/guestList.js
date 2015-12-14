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
							email: '',
							cell: '',
							kids: 2,
							numberOfKids: null,
							clear: function(){
								this.name = '';
								this.email = '';
								this.cell = '';
								this.kids = 2;
								this.numberOfKids = null;
								this.plusOne = 1;
							}
						}
		
		vm.guests = [
							{id: 0, name: 'Rani Moodley', plusOne: 1, attending: 1, email: 'rani@pretendmail.com', cell: '0821234567' },
							{id: 1, name: 'Bavani Moodley', plusOne: 1, attending: 2, email: 'rani@pretendmail.com', cell: '0827654321' }
						];
						
		vm.yesNoOptions = [
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
				email: vm.inputModel.email,
				cell: vm.inputModel.cell,
				plusOne: vm.inputModel.plusOne,
				kids: vm.inputModel.kids,
				numberOfKids: vm.inputModel.numberOfKids, 
				attending: 1
			});
			
			vm.inputModel.clear();
		}
	}
}());






