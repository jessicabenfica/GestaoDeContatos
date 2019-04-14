import { Endereco } from './endereco';

export interface Contato {
    nomeCompleto:string;
    email: string[];
    telefones: string[];
    observacao:string;
    endereco:Endereco;
    numlogradouro:number;
    complementologradouro:string;
}
