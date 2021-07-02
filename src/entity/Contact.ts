import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Contact {

    @PrimaryGeneratedColumn()
    id: number;
 
    @Column()
    nombre: string;

    @Column()
    correo: string;

    @Column()
    fecha: string;

    @Column({
        type: 'varchar', 
        length: 255, 
        default: '', 
        nullable: false,
    })
    temas: string;
}