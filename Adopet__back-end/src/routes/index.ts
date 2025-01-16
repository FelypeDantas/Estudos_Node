import express from "express";
import petsRouter from "../routes/petsRoutes" 

const router = (app:express.Router) => {
    app.use("/pets", petsRouter);
}

export default router;