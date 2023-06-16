import { Pedidos } from './Pedidos.Entities';
import { Restaurante } from './Restaurante.Entities';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany } from "typeorm";

@Entity()
export class Produtos {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    descricao: string;

    @Column()
    quantidade: number;

    @Column('float')
    preco: number;

    @Column()
    categoria: string;

    @ManyToOne(() => Restaurante, (restaurante) => restaurante.produtos)
    @Column({nullable: false})
    restaurante: number;

    @ManyToMany(() => Pedidos, (pedidos) => pedidos.produtos)
    pedidos: Pedidos[];
}