import { Query, Resolver } from "type-graphql";

@Resolver()
export class CountryResolver {
  @Query(() => String)
  async hello() {
    return "Hello, World!";
  }
}
