import fixture from 'can-fixture';

fixture("GET /api/products", () => {
	return [
		{id: 1, name: 'Product 1', 'description': 'A description'}, 
		{id: 2, name: 'Product 2', 'description': 'A product 2 description'},
		{id: 3, name: 'Product 3', 'description': 'A product 3 description'},
	];
});

export default fixture;