import { Materia } from '../models/MateriaModelo.js';

export class MateriaController {
    static async agregar(req, res) {
        try {
            const { materia, descripcion } = req.body;
            const materiaNueva = new Materia(materia, descripcion);
            Materia.agregar(materiaNueva);
            res.status(201).json({ message: "Materia agregada con éxito", materiaNueva });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async listar(req, res) {
        try {
            res.status(200).json(Materia.listar());
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async buscarPorId(req, res) {
        try {
            const { id } = req.params;
            const materia = Materia.buscarPorId(id);
            if (materia) {
                res.status(200).json(materia);
            } else {
                res.status(404).json({ message: "Materia no encontrada" });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async actualizar(req, res) {
        try {
            const { id } = req.params;
            const datos = req.body;
            const materiaActualizada = Materia.actualizar(id, datos);
            if (materiaActualizada) {
                res.status(200).json({ message: "Materia actualizada con éxito", materiaActualizada });
            } else {
                res.status(404).json({ message: "Materia no encontrada" });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async eliminar(req, res) {
        try {
            const { id } = req.params;
            const materiaEliminada = Materia.eliminar(id);
            if (materiaEliminada) {
                res.status(200).json({ message: "Materia eliminada con éxito" });
            } else {
                res.status(404).json({ message: "Materia no encontrada" });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}
