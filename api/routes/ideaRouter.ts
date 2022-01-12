import IdeaController from '../controllers/ideaController';
import express from 'express';

const ideaRouter = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Idea:
 *       type: object
 *       required:
 *         - title
 *         - description
 *       properties:
 *         title:
 *           type: string
 *           description: title of an idea
 *         description:
 *           type: string
 *           description: Description of your idea
 *       example:
 *         title: Documenting your Node.js and Express API
 *         description: You can document your API with swagger-jsdocs, swagger-ui-express
 */

/**
 * @swagger
 *  tags:
 *    name: Ideas
 *    description: Collection of APIs to interact with idea
 */

/**
 * @swagger
 * /ideas:
 *   get:
 *     summary: Returns ideas of default page and limit unless page number and limit is specified.
 *     tags: [Ideas]
 *     responses:
 *       200:
 *         description: List of Ideas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Idea'
 */
ideaRouter.get('/', IdeaController.getIdeas);

/**
 * @swagger
 * /ideas/{id}:
 *   get:
 *     summary: Returns an idea with given id
 *     tags: [Ideas]
 *     parameters:
 *       - in : path
 *         name: id
 *         description: id of an idea
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Details of an idea for a requested id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Idea'
 *       400:
 *         description:  No Idea was found with a given id
 */
ideaRouter.get('/:id', IdeaController.getIdeaById);


/**
 * @swagger
 * /ideas:
 *   post:
 *     summary: Create a new idea
 *     tags: [Ideas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Idea'
 *     responses:
 *       200:
 *         description: The idea was successfully added
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Idea'
 *       500:
 *         description: Something went wrong
 */
ideaRouter.post('/', IdeaController.addIdea);

/**
 * @swagger
 * /ideas/{id}:
 *   put:
 *     summary: Updates an existing idea details
 *     tags: [Ideas]
 *     parameters:
 *       - in : path
 *         name: id
 *         description: id of an idea
 *         schema:
 *           type: string
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Idea'
 *     responses:
 *       200:
 *         description: Idea details was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Idea'
 *       500:
 *         description: Something went wrong
 */
 ideaRouter.put('/:id', IdeaController.updateIdea);

 /**
 * @swagger
 * /ideas/{id}:
 *   delete:
 *     summary: Remove an idea with a given id
 *     tags: [Ideas]
 *     parameters:
 *       - in : path
 *         name: id
 *         description: id of an idea to be deleted
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Idea was successfully removed from the system
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Idea'
 *       500:
 *         description: Something went wrong
 */
ideaRouter.delete('/:id', IdeaController.deleteIdea);

export default ideaRouter