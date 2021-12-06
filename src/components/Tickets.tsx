import { Decimal } from "@prisma/client/runtime";
import styled from "styled-components";
import Image from "next/image";
import Router from "next/router";

async function destroy(id: number): Promise<void> {
    await fetch(`http://localhost:3000/api/tickets/${id}`, {
        method: 'DELETE',
    })
    await Router.push('/')
}

export type TicketsProps = {
    id: number;
    evento: string;
    artista: string;
    local: string;
    descricao: string;
    data: string;
    preco: Decimal;
    url: string;
    setData: (id: number,
        evento: string,
        artista: string,
        local: string,
        descricao: string,
        data: string,
        preco: Decimal,
        url: string) => void
}

const Card = styled.div`
    width: 300px;
    height: 200px;
    background: #E0E0E0;
    border-radius: 5px;
`

const Top = styled.div`
    display: flex;
`
const Img = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: 5px 0px 0px 0px;
    
`

const Imagem = styled.img`
    width: 100px;
    height: 100px;
`

const Information = styled.div``

const Name = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 200px;
    margin-top: 5px;

    .evento {
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 20px;
        color: #000000;
    }

    .data {
        font-family: Open Sans;
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        line-height: 20px;
        color: #000000;
    }
`

const Local = styled.div`
    display: grid;
    align-items: center;
    height: 60px;
    margin: 12px 0 0 10px;

    .local,
    .artista { 
        display: flex; 
        align-items: center;    
    }

    .local-name,
    .artista-name {
        display: flex;
        align-items: center;
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        color: #000000;
        margin-left: 8px;
    }
`

const Bottom = styled.div`
    height: 100px;
`

const Description = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 70px;

    .descricao {
        width: 200px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        text-align: center;
        color: #000000;
    }
`

const Price = styled.div`
    display: flex;
    width: 300px;
    justify-content: space-around;

    .preco {
        font-family: Open Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 20px;
        color: rgba(0, 0, 0, 0.5);
    }

    .search {
        cursor: pointer;
    }
`

const Tickets: React.FC<{ tickets: TicketsProps }> = ({ tickets }) => {
    return (
        <>
            <Card>
                <Top>
                    <Img>
                        <Imagem src={tickets.url} alt="event image" />
                    </Img>
                    <Information>
                        <Name>
                            <p className="evento">{tickets.evento}</p>
                            <p className="data">{tickets.data}</p>
                        </Name>
                        <Local>
                            <p className="local">
                                <Image src="/img/map-pin.svg" alt="gps icon" width={20} height={20} />
                                <p className="local-name">{tickets.local}</p>
                            </p>
                            <p className="artista">
                                <Image src="/img/user.svg" alt="artist icon" width={20} height={20} />
                                <p className="artista-name">{tickets.artista}</p>
                            </p>
                        </Local>
                    </Information>
                </Top>
                <Bottom>
                    <Description>
                        <p className="descricao">{tickets.descricao}</p>
                    </Description>
                    <Price>
                        <button onClick={() => tickets.setData(tickets.id, tickets.evento, tickets.artista, tickets.local, tickets.descricao, tickets.data, tickets.preco, tickets.url)} >MOSTRAR</button>
                        <p className="preco">R$ {tickets.preco}</p>
                        <button onClick={() => destroy(tickets.id)}>DELETAR</button>
                    </Price>
                </Bottom>
            </Card>
        </>
    )
}

export default Tickets