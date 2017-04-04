class SalaryCalculator{
	constructor(){
		this.__data = {
			basic : 0,
			hra : 0,
			da : 0,
			tax : 0,
			salary : 0
		}
		this.__listenerFns = [];
	}

	onChange(listenerFn){
		this.__listenerFns.push(listenerFn);
	}

	set(attr, value){
		if (this.__data[attr] === value) return;
		this.__data[attr] = value;
		this.__listenerFns.forEach(listenerFn => listenerFn());
	}

	get(attr){
		return this.__data[attr]
	}

	calculate(){
		let gross = this.get('basic') + this.get('hra') + this.get('da');
		let net = gross * ((100-this.get('tax'))/100);
		this.set('salary', net);
	}
}