import express from 'express'
import bodyParser from 'body-parser'
import { MongoClient } from 'mongodb'
import React from 'react'
import ReactDOMServer, { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// Constants
import { 
	ADD_FRIEND, CREATE_ACCOUNT, REMOVE_FRIEND, 
	REMOVE_POST, SUBMIT_POST } 
from './src/constants/ActionTypes'

const app = express();
const PORT = process.env.PORT || 3000;
var db;

// Middleware
app.use(express.static('static'));
app.use(bodyParser.json());

// Get specific profile info
app.get('/api/users/:id', ( req, res ) => {
	const profileId = parseInt(req.params.id);
	db.collection("profiles")
		.findOne({id: profileId}, ( err, profile ) => {
			res.json(profile);
		});
})

// Modify a specific profile
app.post('/api/users/:id', ( req, res ) => {
	const profileId = parseInt(req.params.id);
	const { id, type } = req.body;

	switch (type) {
		case ADD_FRIEND: {
			db.collection("profiles")
				.update(
					{ id: profileId }, 
					{ $push: { friends: id }}
				)

			// For now, the person you add adds you back
			db.collection("profiles")
				.update(
					{ id: id }, 
					{ $push: { friends: profileId }}
				)

			break
		}

		case CREATE_ACCOUNT: {
			const { name } = req.body;

			db.collection("namesById")
				.insert({ id: id, name: name })

			db.collection("profiles")
				.insert({
					id: id,
					name: name,
					friends: [id],
					wall: []
				})

			break
		}

		case REMOVE_FRIEND: {
			db.collection("profiles")
				.update(
					{ id: profileId }, 
					{ $pull: { friends: id }}
				)

			// For now, the person you remove also removes you
			db.collection("profiles")
				.update(
					{ id: id }, 
					{ $pull: { friends: profileId }}
				)

			break
		}

		case REMOVE_POST: {
			db.collection("profiles")
				.update(
					{ id: profileId },
					{ $pull: { wall: { id: id}}}
				)

			break
		}

		case SUBMIT_POST: {
			const { author, text } = req.body;

			db.collection("profiles")
				.update(
					{ id: profileId },
					{ $push: { wall: {
						id,
						author,
						text
					}}}
				)

			break
		}
	}

	res.end();
})

// Get all names with id
app.get('/api/namesById', ( req, res ) => {
	db.collection("namesById")
		.find({}).toArray(( err, namesById ) => {
			res.json(namesById);
		});
})

// Connect to server and connect to database
MongoClient.connect('mongodb://localhost/users', ( err, dbConnection ) => {
	db = dbConnection;

	const server = app.listen(PORT, () => {
		console.log("Started server at port", PORT);
	});
})