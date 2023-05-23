import { MaxLength, MinLength } from "class-validator";
import { Field, InputType, ObjectType } from "type-graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
class Country {
  @Field()
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Field()
  @Column()
  name?: string;

  @Field()
  @Column()
  code?: string;

  @Field()
  @Column()
  emoji?: string;
}

@InputType()
export class CountryInput {
  @Field()
  @MinLength(2)
  name?: string;

  @Field()
  @MaxLength(2)
  code?: string;

  @Field()
  @MaxLength(1)
  emoji?: string;
}

export default Country;
