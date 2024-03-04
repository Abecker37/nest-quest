import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Article {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({length: 50})
    title:string;

    @Column({length: 100})
    content:string;

    @Column({length: 50})
    author:string;

    @Column()
    creationDate:Date;
}
