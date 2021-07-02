import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class ContactBlog {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    correo: string; 

    @Column()
    fecha: string;

}