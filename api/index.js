const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
let reservations = [];

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('API de Reserva de Carros');
});

app.post('/reservations', (req, res) => {
  const reservation = req.body;
  reservation.id = reservations.length ? reservations[reservations.length - 1].id + 1 : 1;
  reservations.push(reservation);
  res.status(201).send(reservation);
});

app.get('/reservations', (req, res) => {
  res.status(200).send(reservations);
});

app.put('/reservations/:id', (req, res) => {
  const reservationId = parseInt(req.params.id);
  const index = reservations.findIndex(r => r.id === reservationId);

  if (index !== -1) {
    reservations[index] = { ...reservations[index], ...req.body };
    res.status(200).send(reservations[index]);
  } else {
    res.status(404).send({ message: 'Reserva não encontrada' });
  }
});

app.delete('/reservations/:id', (req, res) => {
  const reservationId = parseInt(req.params.id);
  const index = reservations.findIndex(r => r.id === reservationId);

  if (index !== -1) {
    const deletedReservation = reservations.splice(index, 1);
    res.status(200).send(deletedReservation);
  } else {
    res.status(404).send({ message: 'Reserva não encontrada' });
  }
});

module.exports = app;
