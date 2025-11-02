import express from 'express';
import users from './users';
import services from './services';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('API is running');
});

export default (): express.Router => {
    services(router);
    users(router);

    return router;
}