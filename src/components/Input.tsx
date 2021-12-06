import styled from "styled-components";
import Router from "next/router";
import IInput from "../interfaces/IInput";
import axios from 'axios'

async function publish(id: number): Promise<void> {
    await fetch(`http://localhost:3000/api/tickets/create`, {
        method: 'POST',
    })
    await Router.push('/')
}

const Form = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    height: 100px;

    input {
        width: 150px;
        height: 18px;
    }
`

const Button = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 20px;
`

const Input: React.FC<IInput> = props => {
    async function update() {

        // @ts-ignore: Unreachable code error
        const evento = document.getElementById('evento').value;
        // @ts-ignore: Unreachable code error
        const artista = document.getElementById('artista').value;
        // @ts-ignore: Unreachable code error
        const local = document.getElementById('local').value;
        // @ts-ignore: Unreachable code error
        const descricao = document.getElementById('descricao').value;
        // @ts-ignore: Unreachable code error
        const data = document.getElementById('data').value;
        // @ts-ignore: Unreachable code error
        const preco = document.getElementById('preco').value;
        // @ts-ignore: Unreachable code error
        const url = document.getElementById('url').value;

        await axios.put(`/api/tickets/${props.id}`, {
            evento: evento.toString().length > 0 ? evento : props.evento,
            artista: artista.toString().length > 0 ? artista : props.artista,
            local: local.toString().length > 0 ? local : props.local,
            descricao: descricao.toString().length > 0 ? descricao : props.descricao,
            data: data.toString().length > 0 ? data : props.data,
            preco: preco.toString().length > 0 ? parseFloat(preco.toString()) : parseFloat(props.preco),
            url: url.toString().length > 0 ? url : props.url
        }, { responseType: 'json' })

        window.location.href = '/'
    }

    async function add() {
        await axios.post('/api/tickets/create', {
            // @ts-ignore: Unreachable code error
            evento: document.getElementById('evento').value,
            // @ts-ignore: Unreachable code error
            artista: document.getElementById('artista').value,
            // @ts-ignore: Unreachable code error
            local: document.getElementById('local').value,
            // @ts-ignore: Unreachable code error
            descricao: document.getElementById('descricao').value,
            // @ts-ignore: Unreachable code error
            data: document.getElementById('data').value,
            // @ts-ignore: Unreachable code error
            preco: parseFloat(document.getElementById('preco').value),
            // @ts-ignore: Unreachable code error
            url: document.getElementById('url').value,
        }, { responseType: 'json' })

        window.location.href = '/'
    }

    return (
        <>
            <Form>
                <input type="text" id="evento" placeholder={props.evento != undefined ? props.evento : "Evento"}></input>
                <input type="text" id="artista" placeholder={props.artista != undefined ? props.artista : "Artista"} ></input>
                <input type="text" id="local" placeholder={props.local != undefined ? props.local : "Local"} ></input>
                <input type="text" id="descricao" placeholder={props.descricao != undefined ? props.descricao : "Descrição"}></input>
                <input type="text" id="data" placeholder={props.data != undefined ? props.data : "Data"}></input>
                <input type="text" id="preco" placeholder={props.preco != undefined ? props.preco : "Preço"}></input>
                <input type="text" id="url" placeholder={props.url != undefined ? props.url : "Url Img"}></input>
            </Form>
            <Button>
                <button onClick={() => add()}>Adicionar</button>
                <button onClick={() => update()} >Atualizar</button>
            </Button>
        </>
    )
}

export default Input