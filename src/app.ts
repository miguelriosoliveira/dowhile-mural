import express from 'express';

const PORT = process.env.PORT || 3000;

const app = express();

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`🚀 listening on port: ${PORT}`));
