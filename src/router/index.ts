import express from 'express';
import users from './users';
import services from './services';
import bookings from './bookings';
import reviews from './reviews';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('API is running');
});

export default (): express.Router => {
    services(router);
    users(router);
    bookings(router);
    reviews(router);

    return router;
}