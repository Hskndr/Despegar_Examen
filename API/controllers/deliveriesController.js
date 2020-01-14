exports.getDeliveries = function (req, res) {
    var deliveries = deliveriesS.find(deliveries => deliveries.id === req.params.deliveriesId);
    res.send(deliveries);
};

var deliveriesS = [
    {
        id: '1',
        company: 'Bar BQ',
        description: 'Comida Americana, Comida Internacional, Parrilla, Ensaladas'
    },
    {
        id: '2',
        company: 'Chimu',
        description: 'Comida Peruana, Parrilla, Ensaladas, Milanesas',
    },
    {
        id: '3',
        company: 'Chino Central',
        description: 'Comida China, Ensaladas, Carnes, Pastas',
    },
    {
        id: '4',
        company: 'Don Pedro',
        description: 'Casa de empanadas, especialidades',
    },
    {
        id: '5',
        company: 'Doña Luisa',
        description: 'Rotiseria, especialidad en minutas, milanesas, pizzas y pastas',
    },
    {
        id: '6',
        company: 'El rey del Pollo',
        description: 'Rotiseria, especialidad en pollo a la parrilla, Minutas varias',
    },
    {
        id: '7',
        company: 'Kaizen',
        description: 'Comida Japonesa, Comida Peruana, Wick, Sushi',
    },
    {
        id: '8',
        company: 'Koh Lanta',
        description: 'Comida Thailandesa, Carnes, Wick, Ensaladas',
    },
    {
        id: '9',
        company: 'Parrilla Gonza',
        description: 'Parrilla, Tortillas, Ensaladas, Pizza',
    },
    {
        id: '10',
        company: 'Sr Choripan',
        description: 'Parrillas, Tartas, Hamburgeusas, Milanesas',
    },
    {
        id: '11',
        company: 'Sugar Bar',
        description: 'Comida Americana, Desayunos, Ensaladas, Hamburguesas',
    },
    {
        id: '12',
        company: 'Suhimoto',
        description: 'Comida Japonesa, Bebidas Alcoholicas, Sushi',
    },
];