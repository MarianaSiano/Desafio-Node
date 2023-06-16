import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm";

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
}