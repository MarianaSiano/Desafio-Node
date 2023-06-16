import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Restaurante } from "./RestauranteModel";

@Entity()
export class Produtos {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    descricao: string;

    @Column()
    quantidade: string;

    @Column()
    preco: string;

    @Column()
    categoria: string;

    @Column()
    id_restaurante: Restaurante;
}