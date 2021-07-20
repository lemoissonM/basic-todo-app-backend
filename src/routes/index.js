import { Router } from 'express';

const normalizedPath = require('path').join(__dirname, '/');

const router = Router();

require('fs').readdirSync(normalizedPath).forEach((file) => {
  if (file.startsWith('.') || file === 'index.js') return;
  const route = require(`./${file}`);
  router.use(`/${file.replace('.js', '')}`, route.default);
});

router.use((req, res) => res.status(404).json({
  message: `Invalid url: ${req.url}`,
}));

export default router;
