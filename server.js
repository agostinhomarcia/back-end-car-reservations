const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

let reservations = [];

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Rotas
app.get('/', (req, res) => {
  res.send('API de Reserva de Carros');
});

// Rota para criar uma nova reserva
app.post('/reservations', (req, res) => {
  const reservation = req.body;
  reservation.id = reservations.length ? reservations[reservations.length - 1].id + 1 : 1; // Adiciona um ID à reserva
  reservations.push(reservation);
  res.status(201).send(reservation);
});

// Rota para obter todas as reservas
app.get('/reservations', (req, res) => {
  res.status(200).send(reservations);
});

// Rota para atualizar uma reserva
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

// Rota para deletar uma reserva
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

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
