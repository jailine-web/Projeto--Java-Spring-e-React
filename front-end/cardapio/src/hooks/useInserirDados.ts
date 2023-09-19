import axios, {AxiosPromise } from "axios"
import { dadosComida } from "../components/Interface/dadosComida";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const url = 'http://localhost:8080';

const postDados = async (dados :dadosComida): AxiosPromise<any> =>{
    const response = axios.post(url + '/cardapio', dados);
    return response;

}

export function useDadosComida(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postDados,
        retry: 2,
        onSuccess:() =>{
            queryClient.invalidateQueries(['dados-comida'])
        }
    })

    return mutate;
        
}