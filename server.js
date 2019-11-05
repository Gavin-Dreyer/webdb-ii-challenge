const express = require('express');

const db = require('./data/dbConfig.js');

server = express();

server.use(express.json());

server.get('/', (req, res) => {
	db.select('*')
		.from('cars')
		.then(cars => {
			res.status(200).json(cars);
		})
		.catch(err => {
			res.status(500).json({ error: 'Failed to get cars from DB' });
		});
});

server.post('/', (req, res) => {
	db.insert(req.body, 'id')
		.into('cars')
		.then(ids => {
			res.status(201).json(ids);
		})
		.catch(err => {
			res.status(500).json({ error: 'Failed to insert car into DB' });
		});
});

server.put('/:id', (req, res) => {
	db('cars')
		.where({ id: req.params.id })
		.update(req.body)
		.then(count => {
			res.status(200).json(count);
		})
		.catch(err => {
			res.status(500).json({ error: 'Failed to change car information in DB' });
		});
});

server.delete('/:id', (req, res) => {
	db('cars')
		.where({ id: req.params.id })
		.del()
		.then(count => {
			res.status(200).json(count);
		})
		.catch(err => {
			res.status(500).json({ error: 'Failed to delete car from DB' });
		});
});

module.exports = server;
