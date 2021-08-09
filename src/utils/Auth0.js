import { auth } from 'express-openid-connect';

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTH0_SECRET_KEY,
  baseURL: 'http://localhost:3000',
  clientID: process.env.AUTH0_PROJECT_KEY,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL
};

export default auth(config);