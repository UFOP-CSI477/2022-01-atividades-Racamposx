"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createLocalColeta_1 = require("../controllers/locais-coleta/createLocalColeta");
const getByIdLocalColeta_1 = require("../controllers/locais-coleta/getByIdLocalColeta");
const getByNameLocalColeta_1 = require("../controllers/locais-coleta/getByNameLocalColeta");
const updateLocalColeta_1 = require("../controllers/locais-coleta/updateLocalColeta");
const deleteLocalColeta_1 = require("../controllers/locais-coleta/deleteLocalColeta");
const getAllLocalColeta_1 = require("../controllers/locais-coleta/getAllLocalColeta");
const localColetaRouter = (0, express_1.Router)();
const createLocalColetaController = new createLocalColeta_1.CreateLocalColetaController();
const getAllLocalColeta = new getAllLocalColeta_1.GetAllLocalColetaController();
const getByNameLocalColetaController = new getByNameLocalColeta_1.GetByNameLocalColetaController();
const getByIdLocalColetaController = new getByIdLocalColeta_1.GetByIdLocalColetaController();
const updateLocalColetaController = new updateLocalColeta_1.UpdateLocalColetaController();
const deleteLocalColetaController = new deleteLocalColeta_1.DeleteLocalColetaController();
localColetaRouter.get('/local-coleta', getAllLocalColeta.handle);
localColetaRouter.get('/local-coleta/:id', getByIdLocalColetaController.handle);
localColetaRouter.get('/local-coleta/nome/:nome', getByNameLocalColetaController.handle);
localColetaRouter.post('/local-coleta', createLocalColetaController.handle);
localColetaRouter.put('/local-coleta/:id', updateLocalColetaController.handle);
localColetaRouter.delete('/local-coleta/:id', deleteLocalColetaController.handle);
exports.default = localColetaRouter;