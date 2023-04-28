const {Router} = require('express');
const tecnoCtrl = require('../controllers/tecnoglassControllers');
const router = Router();

//ENDPOINTS ITEMS
router.get('/item',tecnoCtrl.getItem);
router.post('/item',tecnoCtrl.insertItem);
router.delete('/item/:id',tecnoCtrl.deleteItem);

//ENDPOINTS CLIENTES
router.post('/cliente',tecnoCtrl.insertClient);
router.put('/cliente/:id',tecnoCtrl.updateClient);
router.get('/cliente',tecnoCtrl.getClients);
router.delete('/cliente/:id',tecnoCtrl.deleteClient);

//ENDPOINTS ORDEN
router.post('/orden',tecnoCtrl.insertOrder);
router.put('/orden/:id',tecnoCtrl.updateOrder);
router.get('/orden',tecnoCtrl.getOrders);
router.get('/ordenSolic',tecnoCtrl.getOrdersSolic);


module.exports = router;