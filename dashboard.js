import ExpressDashboard from 'express-dashboard';
import User from './models/user';

const dashboard = new ExpressDashboard('/admin');

dashboard.register(User);

export default dashboard.dashboard();
