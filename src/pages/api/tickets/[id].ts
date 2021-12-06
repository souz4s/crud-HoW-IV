import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const ticketId = req.query.id

    if (req.method === 'GET') {
        handleGET(ticketId, res)
    } else if (req.method === 'PUT') {
        handlePUT(ticketId, req, res)
    } else if (req.method === 'DELETE') {
        handleDELETE(ticketId, res)
    } else {
        throw new Error(
            `The HTTP ${req.method} method is not supported at this route.`
        )
    }
}

// GET /api/tickets/:id
async function handleGET(ticketId, res) {
    const tickets = await prisma.tickets.findUnique({
        where: {
            id: Number(ticketId)
        }
    })
    res.json(tickets)
}

// PUT /api/tickets/:id
async function handlePUT(ticketId, req, res) {
    const data =  req.body;
    const tickets = await prisma.tickets.update({
        where: {
            id: Number(ticketId)
        },
        data: data
    })
    res.json(tickets)
}

// DELETE /api/tickets/:id
async function handleDELETE(ticketId, res) {
    const tickets = await prisma.tickets.delete({
        where: {
            id: Number(ticketId)
        }
    })
    res.json(tickets)
}