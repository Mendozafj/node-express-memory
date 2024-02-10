// controllers/EventoController.js
import { Evento } from '../models/EventoModelo.js';

export class EventoController {
    static async agregar(req, res) {
        try {
            const { tipo, descripcion, fecha, detalles } = req.body;
            const evento = new Evento(tipo, descripcion, fecha, detalles);
            Evento.agregar(evento);
            res.status(201).json({ message: "Evento agregado con éxito", evento });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async listar(req, res) {
        res.status(200).json(Evento.listar());
    }

    static async buscarPorId(req, res) {
        const evento = Evento.buscarPorId(req.params.id);
        if (evento) {
            res.status(200).json(evento);
        } else {
            res.status(404).json({ message: "Evento no encontrado" });
        }
    }

    static async actualizar(req, res) {
        const eventoActualizado = Evento.actualizar(req.params.id, req.body);
        if (eventoActualizado) {
            res.status(200).json({ message: "Evento actualizado con éxito", evento: eventoActualizado });
        } else {
            res.status(404).json({ message: "Evento no encontrado" });
        }
    }

    static async eliminar(req, res) {
        const eventoEliminado = Evento.eliminar(req.params.id);
        if (eventoEliminado) {
            res.status(200).json({ message: "Evento eliminado con éxito"});
        } else {
            res.status(404).json({ message: "Evento no encontrado" });
        }
    }
}