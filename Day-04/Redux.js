
var Redux = (function(){
	var _currentState = null;
	var _subscribers = [];
	var _reducer = null;
	var INIT_ACTION = {type : 'INIT'};

	function getState(){
		return _currentState;
	}

	function dispatch(action){
		var newState = _reducer(_currentState, action);
		if (newState !== _currentState){
			_currentState = newState;
			triggerChange();
		}
	}
	function triggerChange(){
		_subscribers.forEach(subscriber => subscriber());
	}
	function subscribe(fn){
		if (typeof fn !== 'function') throw new 'Invalid argument';
		_subscribers.push(fn);
	}
	function createStore(reducer){
		_reducer = reducer;
		_currentState = reducer(undefined, INIT_ACTION);
		return {
			getState : getState,
			dispatch : dispatch,
			subscribe : subscribe
		}
	}
	return {
		createStore : createStore
	}
})();