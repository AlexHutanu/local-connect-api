import express from 'express';
import users from './user.router';
import services from './service.router';
import bookings from './booking.router';
import reviews from './review.router';

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