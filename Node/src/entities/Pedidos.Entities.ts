import { Restaurante } from "./Restaurante.Entities";
import { Produtos } from "./Produtos.Entities";
import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToOne, ManyToMany } from "typeorm";

@Entity()
export class Pedidos {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('float')
    valor_total: number;

    @Column()
    nome_cliente: string;

    @Column()
    cidade_cliente: string;

    @Column()
    endereco_cliente: string;

    @Column()
    telefone_cliente: string;

    @ManyToOne(() => Restaurante, (restaurante) => restaurante.pedidos)
    restaurante: number;

    @ManyToMany(() => Produtos, (produto) => produto.pedidos)
    @JoinTable()
    produtos: Produtos[];
}