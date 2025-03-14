import { Router } from 'express';
import { EmailRoutes } from '../EmailService/email.routes';
const router = Router();

const moduleRoutes = [
  {
    path: '/email',
    route: EmailRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
