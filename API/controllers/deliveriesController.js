exports.getDeliveries = function (req, res) {
    var deliveries = deliveriesS.find(deliveries => deliveries.id === req.params.deliveriesId);
    res.send(deliveries);
};

exports.getAllDeliveries = function (req, res) {
    var deliveries = deliveriesS;
    res.send(deliveries);
};

var deliveriesS = [
    {
        id: '1',
        company: 'Bar BQ',
        description: 'Comida Americana, Comida Internacional, Parrilla, Ensaladas',
        menues: [
            {
                idMenu: '1',
                descMenu: 'Comida Americana', dishes: [
                    {idDish: '1', descripDish: 'plato 1', priceDish: 20},
                    {idDish: '2', descripDish: 'plato 2', priceDish: 20}]
            },
            {
                idMenu: '2',
                descMenu: 'Comida Internacional', dishes: [
                    {idDish: '1', descripDish: 'plato 1', priceDish: 20},
                    {idDish: '2', descripDish: 'plato 2', priceDish: 20}]
            },
            {
                idMenu: '3', descMenu: 'Parrilla', dishes: [
                    {idDish: '1', descripDish: 'plato 1', priceDish: 20},
                    {idDish: '2', descripDish: 'plato 2', priceDish: 20}]
            },
            {
                idMenu: '4', descMenu: 'Ensaladas', dishes: [
                    {idDish: '1', descripDish: 'plato 1', priceDish: 20},
                    {idDish: '2', descripDish: 'plato 2', priceDish: 20}]
            },
        ]
    },
    {
        id: '2',
        company: 'Chimu',
        description: 'Comida Peruana, Parrilla, Ensaladas, Milanesas',
        menues: [
            {
                idMenu: '1',
                descMenu: 'Comida Peruana', dishes: [
                    {idDish: '1', descripDish: 'plato 1', priceDish: 20},
                    {idDish: '2', descripDish: 'plato 2', priceDish: 20}]
            },
            {
                idMenu: '2',
                descMenu: 'Parrilla', dishes: [
                    {idDish: '1', descripDish: 'plato 1', priceDish: 20},
                    {idDish: '2', descripDish: 'plato 2', priceDish: 20}]
            },
            {
                idMenu: '3', descMenu: 'Ensaladas', dishes: [
                    {idDish: '1', descripDish: 'plato 1', priceDish: 20},
                    {idDish: '2', descripDish: 'plato 2', priceDish: 20}]
            },
            {
                idMenu: '4', descMenu: 'Milanesas', dishes: [
                    {idDish: '1', descripDish: 'plato 1', priceDish: 20},
                    {idDish: '2', descripDish: 'plato 2', priceDish: 20}]
            },
        ]
    },
    {
        id: '3',
        company: 'Chino Central',
        description: 'Comida China, Ensaladas, Carnes, Pastas',
        menues: [
            {
                idMenu: '1',
                descMenu: 'Comida China', dishes: [
                    {idDish: '1', descripDish: 'plato 1', priceDish: 20},
                    {idDish: '2', descripDish: 'plato 2', priceDish: 20}]
            },
            {
                idMenu: '2',
                descMenu: 'Ensaladas', dishes: [
                    {idDish: '1', descripDish: 'plato 1', priceDish: 20},
                    {idDish: '2', descripDish: 'plato 2', priceDish: 20}]
            },
            {
                idMenu: '3', descMenu: 'Carnes', dishes: [
                    {idDish: '1', descripDish: 'plato 1', priceDish: 20},
                    {idDish: '2', descripDish: 'plato 2', priceDish: 20}]
            },
            {
                idMenu: '4', descMenu: 'Pastas', dishes: [
                    {idDish: '1', descripDish: 'plato 1', priceDish: 20},
                    {idDish: '2', descripDish: 'plato 2', priceDish: 20}]
            },
        ]
    },
    {
        id: '4',
        company: 'Don Pedro',
        description: 'Casa de empanadas, especialidades',
        menues: [
            {
                idMenu: '1',
                descMenu: 'Casa de empanadas', dishes: [
                    {idDish: '1', descripDish: 'plato 1', priceDish: 20},
                    {idDish: '2', descripDish: 'plato 2', priceDish: 20}]
            },
            {
                idMenu: '2',
                descMenu: 'especialidades', dishes: [
                    {idDish: '1', descripDish: 'plato 1', priceDish: 20},
                    {idDish: '2', descripDish: 'plato 2', priceDish: 20}]
            },
            {
                idMenu: '3', descMenu: 'Parrilla', dishes: [
                    {idDish: '1', descripDish: 'plato 1', priceDish: 20},
                    {idDish: '2', descripDish: 'plato 2', priceDish: 20}]
            },
            {
                idMenu: '4', descMenu: 'Ensaladas', dishes: [
                    {idDish: '1', descripDish: 'plato 1', priceDish: 20},
                    {idDish: '2', descripDish: 'plato 2', priceDish: 20}]
            },
        ]
    },
    {
        id: '5',
        company: 'Doña Luisa',
        description: 'Rotiseria, especialidad en minutas, milanesas, pizzas y pastas',
        menues: [
            {
                idMenu: '1',
                descMenu: 'Comida Americana', dishes: [
                    {idDish: '1', descripDish: 'plato 1', priceDish: 20},
                    {idDish: '2', descripDish: 'plato 2', priceDish: 20}]
            },
            {
                idMenu: '2',
                descMenu: 'Rotiseria', dishes: [
                    {idDish: '1', descripDish: 'plato 1', priceDish: 20},
                    {idDish: '2', descripDish: 'plato 2', priceDish: 20}]
            },
            {
                idMenu: '3', descMenu: 'especialidad en minutas', dishes: [
                    {idDish: '1', descripDish: 'plato 1', priceDish: 20},
                    {idDish: '2', descripDish: 'plato 2', priceDish: 20}]
            },
            {
                idMenu: '4', descMenu: 'pizzas y pastas', dishes: [
                    {idDish: '1', descripDish: 'plato 1', priceDish: 20},
                    {idDish: '2', descripDish: 'plato 2', priceDish: 20}]
            },
        ]
    },
    {
        id: '6',
        company: 'El rey del Pollo',
        description: 'Rotiseria, especialidad en pollo a la parrilla, Minutas varias',
        menues: [
            {
                idMenu: '1',
                descMenu: 'Rotiseria', dishes: [
                    {idDish: '1', descripDish: 'plato 1', priceDish: 20},
                    {idDish: '2', descripDish: 'plato 2', priceDish: 20}]
            },
            {
                idMenu: '2',
                descMenu: 'especialidad en pollo a la parrilla ', dishes: [
                    {idDish: '1', descripDish: 'plato 1', priceDish: 20},
                    {idDish: '2', descripDish: 'plato 2', priceDish: 20}]
            },
            {
                idMenu: '3', descMenu: 'Minutas varias', dishes: [
                    {idDish: '1', descripDish: 'plato 1', priceDish: 20},
                    {idDish: '2', descripDish: 'plato 2', priceDish: 20}]
            },
            {
                idMenu: '4', descMenu: 'Ensaladas', dishes: [
                    {idDish: '1', descripDish: 'plato 1', priceDish: 20},
                    {idDish: '2', descripDish: 'plato 2', priceDish: 20}]
            },
        ]
    },
    {
        id: '7',
        company: 'Kaizen',
        description: 'Comida Japonesa, Comida Peruana, Wick, Sushi',
        menues: [
            {
                idMenu: '1',
                descMenu: 'Comida Japonesa', dishes: [
                    {idDish: '1', descripDish: 'plato 1', priceDish: 20},
                    {idDish: '2', descripDish: 'plato 2', priceDish: 20}]
            },
            {
                idMenu: '2',
                descMenu: 'Comida Internacional', dishes: [
                    {idDish: '1', descripDish: 'plato 1', priceDish: 20},
                    {idDish: '2', descripDish: 'plato 2', priceDish: 20}]
            },
            {
                idMenu: '3', descMenu: 'Parrilla', dishes: [
                    {idDish: '1', descripDish: 'plato 1', priceDish: 20},
                    {idDish: '2', descripDish: 'plato 2', priceDish: 20}]
            },
            {
                idMenu: '4', descMenu: 'Ensaladas', dishes: [
                    {idDish: '1', descripDish: 'plato 1', priceDish: 20},
                    {idDish: '2', descripDish: 'plato 2', priceDish: 20}]
            },
        ]
    },
    {
        id: '8',
        company: 'Koh Lanta',
        description: 'Comida Thailandesa, Carnes, Wick, Ensaladas',
        menues: [
            {
                idMenu: '1',
                descMenu: 'Comida Americana', dishes: [
                    {idDish: '1', descripDish: 'plato 1', priceDish: 20},
                    {idDish: '2', descripDish: 'plato 2', priceDish: 20}]
            },
            {
                idMenu: '2',
                descMenu: 'Comida Internacional', dishes: [
                    {idDish: '1', descripDish: 'plato 1', priceDish: 20},
                    {idDish: '2', descripDish: 'plato 2', priceDish: 20}]
            },
            {
                idMenu: '3', descMenu: 'Parrilla', dishes: [
                    {idDish: '1', descripDish: 'plato 1', priceDish: 20},
                    {idDish: '2', descripDish: 'plato 2', priceDish: 20}]
            },
            {
                idMenu: '4', descMenu: 'Ensaladas', dishes: [
                    {idDish: '1', descripDish: 'plato 1', priceDish: 20},
                    {idDish: '2', descripDish: 'plato 2', priceDish: 20}]
            },
        ]
    },
    {
        id: '9',
        company: 'Parrilla Gonza',
        description: 'Parrilla, Tortillas, Ensaladas, Pizza',
        menues: [
            {
                idMenu: '1',
                descMenu: 'Comida Americana', dishes: [
                    {idDish: '1', descripDish: 'plato 1', priceDish: 20},
                    {idDish: '2', descripDish: 'plato 2', priceDish: 20}]
            },
            {
                idMenu: '2',
                descMenu: 'Comida Internacional', dishes: [
                    {idDish: '1', descripDish: 'plato 1', priceDish: 20},
                    {idDish: '2', descripDish: 'plato 2', priceDish: 20}]
            },
            {
                idMenu: '3', descMenu: 'Parrilla', dishes: [
                    {idDish: '1', descripDish: 'plato 1', priceDish: 20},
                    {idDish: '2', descripDish: 'plato 2', priceDish: 20}]
            },
            {
                idMenu: '4', descMenu: 'Ensaladas', dishes: [
                    {idDish: '1', descripDish: 'plato 1', priceDish: 20},
                    {idDish: '2', descripDish: 'plato 2', priceDish: 20}]
            },
        ]
    },
    {
        id: '10',
        company: 'Sr Choripan',
        description: 'Parrillas, Tartas, Hamburgeusas, Milanesas',
        menues: [
            {
                idMenu: '1',
                descMenu: 'Comida Americana', dishes: [
                    {idDish: '1', descripDish: 'plato 1', priceDish: 20},
                    {idDish: '2', descripDish: 'plato 2', priceDish: 20}]
            },
            {
                idMenu: '2',
                descMenu: 'Comida Internacional', dishes: [
                    {idDish: '1', descripDish: 'plato 1', priceDish: 20},
                    {idDish: '2', descripDish: 'plato 2', priceDish: 20}]
            },
            {
                idMenu: '3', descMenu: 'Parrilla', dishes: [
                    {idDish: '1', descripDish: 'plato 1', priceDish: 20},
                    {idDish: '2', descripDish: 'plato 2', priceDish: 20}]
            },
            {
                idMenu: '4', descMenu: 'Ensaladas', dishes: [
                    {idDish: '1', descripDish: 'plato 1', priceDish: 20},
                    {idDish: '2', descripDish: 'plato 2', priceDish: 20}]
            },
        ]
    },
    {
        id: '11',
        company: 'Sugar Bar',
        description: 'Comida Americana, Desayunos, Ensaladas, Hamburguesas',
        mmenues: [
            {
                idMenu: '1',
                descMenu: 'Comida Americana', dishes: [
                    {idDish: '1', descripDish: 'plato 1', priceDish: 20},
                    {idDish: '2', descripDish: 'plato 2', priceDish: 20}]
            },
            {
                idMenu: '2',
                descMenu: 'Comida Internacional', dishes: [
                    {idDish: '1', descripDish: 'plato 1', priceDish: 20},
                    {idDish: '2', descripDish: 'plato 2', priceDish: 20}]
            },
            {
                idMenu: '3', descMenu: 'Parrilla', dishes: [
                    {idDish: '1', descripDish: 'plato 1', priceDish: 20},
                    {idDish: '2', descripDish: 'plato 2', priceDish: 20}]
            },
            {
                idMenu: '4', descMenu: 'Ensaladas', dishes: [
                    {idDish: '1', descripDish: 'plato 1', priceDish: 20},
                    {idDish: '2', descripDish: 'plato 2', priceDish: 20}]
            },
        ]
    },
    {
        id: '12',
        company: 'Suhimoto',
        description: 'Comida Japonesa, Bebidas Alcoholicas, Sushi',
        menues: [
            {
                idMenu: '1',
                descMenu: 'Comida Japonesa', dishes: [
                    {idDish: '1', descripDish: 'plato 1', priceDish: 20},
                    {idDish: '2', descripDish: 'plato 2', priceDish: 20}]
            },
            {
                idMenu: '2',
                descMenu: 'Bebidas Alcoholicas', dishes: [
                    {idDish: '1', descripDish: 'plato 1', priceDish: 20},
                    {idDish: '2', descripDish: 'plato 2', priceDish: 20}]
            },
            {
                idMenu: '3', descMenu: 'Sushi', dishes: [
                    {idDish: '1', descripDish: 'plato 1', priceDish: 20},
                    {idDish: '2', descripDish: 'plato 2', priceDish: 20}]
            },
            {
                idMenu: '4', descMenu: '', dishes: [
                    {idDish: '1', descripDish: '', priceDish: ''},
                    {idDish: '2', descripDish: '', priceDish: ''}]
            },
        ]
    },
];