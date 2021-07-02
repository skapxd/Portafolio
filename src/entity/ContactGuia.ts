import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class ContactGuia {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    nombre: string;

    @Column()
    email: string;

    @Column()
    telefono: string;

    @Column()
    fecha: string;

    
    @Column()
    finanzas: string;

    
    @Column()
    marketing: string;

    
    @Column()
    ventas: string;

    
    @Column()
    impuestos: string;

    
    @Column()
    talentoHumano: string;

    
    @Column()
    desarrolloPersonal: string;
    
    @Column()
    terminos: string;

}