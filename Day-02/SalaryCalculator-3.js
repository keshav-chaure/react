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

class SalaryCalculator extends EventEmitter{
	constructor(){
		super();
		this.__data = {
			basic : 0,
			hra : 0,
			da : 0,
			tax : 0,
			salary : 0
		};
	}
	set(attr, value){
		if (this.__data[attr] === value) return;
		this.__data[attr] = value;
		this.emit();
	}
	get(attr){
		return this.__data[attr];
	}
	calculate(){
		let net = this.get('basic') + this.get('hra') + this.get('da');
		this.set('salary', net * ((100-this.get('tax'))/100));
	}
}