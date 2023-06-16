import { Pedidos } from './Pedidos.Entities';
import { Produtos } from './Produtos.Entities';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";

@Entity()
export class Restaurante {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    senha: string;

    @Column()
    categoria: string;

    @Column()
    cidade: string;

    @Column()
    endereco: string;

    @Column()
    telefone: string;

    @OneToMany(() => Produtos, (produto) => produto.restaurante)
    produtos: Produtos[];

    @OneToMany(() => Pedidos, (pedido) => pedido.restaurante)
    pedidos: Pedidos[];
}