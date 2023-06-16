import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Restaurante } from "./RestauranteModel";
import { Produtos } from "./ProdutosModel";

@Entity()
export class Pedidos {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    valor_total: number;

    @Column()
    nome_cliente: string;

    @Column()
    endereco_cliente: string;

    @Column()
    telefone_cliente: string;

    @Column()
    restaurante: Restaurante;

    @Column()
    produtos: Produtos[];
}