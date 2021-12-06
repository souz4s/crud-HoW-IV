import { GetServerSideProps } from "next";
import Router from "next/router";
import { TicketsProps } from "../../../components/Tickets";

async function publish(id: number): Promise<void> {
    await fetch(`http://localhost:3000/api/tickets/${id}`, {
        method: 'PUT',
    })
    await Router.push('/')
}

async function destroy(id: number): Promise<void> {
    await fetch(`http://localhost:3000/api/tickets/${id}`, {
        method: 'DELETE',
    })
    await Router.push('/')
}