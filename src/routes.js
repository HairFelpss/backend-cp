const routes = require('express').Router();
const UserController = require('./app/controllers/UserController');
const RankController = require('./app/controllers/RankController');
const TreasureController = require('./app/controllers/TreasureController');
const TicketController = require('./app/controllers/TicketController');
const MessageController = require('./app/controllers/MessageController');
const StatementController = require('./app/controllers/StatementController');
const SessionController = require('./app/controllers/SessionController');
const authMiddleware = require('./app/middlewares/auth');
const PagSeguroController = require('./app/controllers/PagSeguroController');
const MercadoPagoController = require('./app/controllers/MercadoPagoController');
const PayPalController = require('./app/controllers/PayPalController');

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

//routes.use(authMiddleware);

routes.get('/users', UserController.index);
routes.get('/users/count', UserController.indexAccounts);
routes.get('/users/managers', UserController.indexManagers);
routes.get('/users/search/:search', UserController.search);
routes.get('/users/:id', UserController.indexOne);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

routes.post('/rank', RankController.store);
routes.get('/rank', RankController.index);
routes.put('/rank/:id', RankController.update);
routes.delete('/rank/:id', RankController.delete);

routes.post('/tickets', TicketController.store);
routes.get('/tickets/search/:search', TicketController.search);
routes.get('/tickets/solved', TicketController.indexSolvedTickets);
routes.post('/tickets/filter', TicketController.filter);
routes.get('/tickets', TicketController.index);
routes.put('/tickets/:id', TicketController.update);
routes.delete('/tickets/:id', TicketController.delete);

routes.post('/messages', MessageController.store);
routes.get('/messages/:id', MessageController.index);
routes.delete('/messages/:id', MessageController.delete);
routes.delete('/messages/deleteMessage/:id', MessageController.delete);

routes.post('/treasures', TreasureController.store);
routes.get('/treasures', TreasureController.index);
routes.get('/treasures/search/:search', TreasureController.search);
routes.put('/treasures/:id', TreasureController.update);
routes.delete('/treasures/:id', TreasureController.delete);

routes.post('/statements', StatementController.store);
routes.get('/statements', StatementController.index);
routes.get('/statements/:id', StatementController.indexOneUser);
routes.put('/statements/:id', StatementController.update);
routes.delete('/statements/:id', StatementController.delete);

//PAYMENTS
routes.post('/pagseguro/pay', PagSeguroController.payment);
routes.get('/pagseguro/success', PagSeguroController.success);
//routes.get('/pagseguro/cancel', PagSeguroController.cancel);
routes.post('/pagseguro/notify', PagSeguroController.notify);

routes.post('/mercadopago/pay', MercadoPagoController.payment);
//routes.get('/mercadopago/success', MercadoPagoController.success);
//routes.get('/mercadopago/cancel', MercadoPagoController.cancel);
routes.post('/mercadopago/notify', MercadoPagoController.notify);

routes.post('/paypal/pay', PayPalController.payment);
routes.get('/paypal/success', PayPalController.success);
routes.get('/paypal/cancel', PayPalController.cancel);

module.exports = routes;
