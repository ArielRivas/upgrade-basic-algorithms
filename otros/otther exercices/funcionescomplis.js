
const cars = [ 
	{ id: 5, brand: "BMW", dmgScore: 98, scoreAeroDynamics: 12, hasXenoLights: true, }, 
	{ id: 82, brand: "Tesla", dmgScore: 73, scoreAeroDynamics: 99, hasXenoLights: false, }, 
	{ id: 22, brand: "Audi", dmgScore: 20, scoreAeroDynamics: 59, hasXenoLights: false, }, 
	{ id: 15, brand: "JEEP", dmgScore: 43, scoreAeroDynamics: 67, hasXenoLights: true, }, 
	{ id: 11, brand: "Mercedes Benz", dmgScore: 71, scoreAeroDynamics: 85, hasXenoLights: true, }
];

const totalCarScore = cars
.filter(function (lights) { 
		return lights.hasXenoLights;
	})
.map(function (aero) { 
		return aero.dmgScore + aero.scoreAeroDynamics;
	})
.reduce(function (acc, current) { 
		return acc + current;
	}, 0);
	
console.log(totalCarScore);

//se puede hacer asi, aninado.