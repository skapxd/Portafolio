import { Column, Entity, PrimaryGeneratedColumn, VersionColumn } from 'typeorm'

@Entity()
export class EntradasBlog {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo: string;

    @Column()
    urlImgPortada: string; 

    @Column()
    urlImgMiniatura: string;

    @Column()
    categoria: string;

    @Column('text')
    parrafo: string;
    
    @Column() 
    fecha: string

    @Column() 
    firma: string

    @Column('varchar', {default: '', nullable: false, length:255})
    urlTitulo: string

    
    // @Column({type: 'int' , default: 0, nullable: false, })
    @VersionColumn()
    masVistos: number

    @Column({type: 'varchar',length: 255, default: 0, nullable: false, })
    uuid: string
}