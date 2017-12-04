angular
	.module('counter', [])
	.controller('CounterController', CounterController);

function CounterController(){
	this.number = 0;
}