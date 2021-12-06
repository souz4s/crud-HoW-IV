import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        handlePOST(req, res)
    } else {
        throw new Error(
            `The HTTP ${req.method} method is not supported at this route.`
        )
    }
}

// POST /api/tickets/create
async function handlePOST(req: NextApiRequest, res: NextApiResponse) {
    const data = req.body;
    const tickets = await prisma.tickets.create({
        data: data
    })
    res.json(tickets)
}