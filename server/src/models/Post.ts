import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    creator: string

    @Column()
    name: string

    @Column()
    description: string

}
