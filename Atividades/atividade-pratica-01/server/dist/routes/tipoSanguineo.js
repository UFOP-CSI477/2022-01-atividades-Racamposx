"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createTipoSangue_1 = require("../controllers/tipo-sanguineo/createTipoSangue");
const deleteTipoSangue_1 = require("../controllers/tipo-sanguineo/deleteTipoSangue");
const getAllTipoSangue_1 = require("../controllers/tipo-sanguineo/getAllTipoSangue");
const getByIdTipoSangue_1 = require("../controllers/tipo-sanguineo/getByIdTipoSangue");
const updateTipoSangue_1 = require("../controllers/tipo-sanguineo/updateTipoSangue");
const tipoSanguineoRouter = (0, express_1.Router)();
const createTipoSangueController = new createTipoSangue_1.CreateTipoSangueController();
const getAllTipoSangueController = new getAllTipoSangue_1.GetAllTipoSangueController();
const getByIdTipoSangueController = new getByIdTipoSangue_1.GetByIdTipoSangueController();
const deleteTipoSangueController = new deleteTipoSangue_1.DeleteTipoSangueController();
const updateTipoSangueController = new updateTipoSangue_1.UpdateTipoSangueController();
tipoSanguineoRouter.get('/sangues', getAllTipoSangueController.handle);
tipoSanguineoRouter.get('/sangues/:id', getByIdTipoSangueController.handle);
tipoSanguineoRouter.post('/sangues', createTipoSangueController.handle);
tipoSanguineoRouter.put('/sangues/:id', updateTipoSangueController.handle);
tipoSanguineoRouter.delete('/sangues/:id', deleteTipoSangueController.handle);
exports.default = tipoSanguineoRouter;
