import express from 'express';
import promptController from "../controllers/prompt-controller";

const routes = express.Router();

routes.post('/api/prompts', promptController.sendText);

export default  routes;