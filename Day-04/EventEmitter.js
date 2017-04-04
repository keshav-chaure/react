class EventEmitter{
	constructor(){
		this.__listenerFns = [];
	}

	onChange(listenerFn){
		if (typeof listenerFn !== 'function')
			throw new Error('Subscription should be a function');
		this.__listenerFns.push(listenerFn);
	}

	emit(){
		this.__listenerFns.forEach(listenerFn => listenerFn());
	}
}