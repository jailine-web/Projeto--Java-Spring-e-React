import axios, {AxiosPromise } from "axios"
import { dadosComida } from "../components/Interface/dadosComida";
import { useQuery } from "@tanstack/react-query";

const url = 'http://localhost:8080';

const fetchDados = async (): AxiosPromise<dadosComida[]> =>{
    const response = axios.get(url + '/cardapio');
    return response;

}

export function useDadosComida(){
    const consulta = useQuery({
        queryFn: fetchDados,
        queryKey: ['dados-comida'],
        retry: 2
    })

    return {
        ...consulta,
        data: consulta.data?.data

    } 
        
}