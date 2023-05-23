import { Field, ObjectType } from "type-graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column()
  name: string = "";

  @Column()
  code: string = "";

  @Column()
  emoji: string = "";
}
