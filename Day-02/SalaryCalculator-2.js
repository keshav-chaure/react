class SalaryCalculator{
	constructor(){
		this.__basic = 0;
		this.__hra = 0;
		this.__da = 0;
		this.__tax = 0;
		this.__salary = 0;

		this.__listenerFns = [];
	}

	onChange(listnenerFn){
		this.__listenerFns.push(listnenerFn);
	}

	triggerChange(){
		this.__listenerFns.forEach(listnenerFn => listnenerFn());
	}

	set basic(value){
		if (this.__basic === value) return;
		this.__basic = value;
		this.triggerChange();
	}

	get basic(){
		return this.__basic;
	}

	set hra(value){
		if (this.__hra === value) return;
		this.__hra = value;
		this.triggerChange();
	}

	get hra(){
		return this.__hra;
	}

	set da(value){
		if (this.__da === value) return;
		this.__da = value;
		this.triggerChange();
	}

	get da(){
		return this.__da;
	}

	set tax(value){
		if (this.__tax === value) return;
		this.__tax = value;
		this.triggerChange();
	}

	get tax(){
		return this.__tax;
	}

	get salary(){
		return this.__salary;
	}
	
	calculate(){
		let gross = this.basic + this.hra + this.da;
		this.__salary = gross * ((100-this.tax)/100);
	}
}