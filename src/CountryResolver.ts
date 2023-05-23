import { Arg, Mutation, Query, Resolver } from "type-graphql";
import Country, { CountryInput } from "./entities/Country";
import datasource from "./db";

@Resolver()
export class CountryResolver {
  @Query(() => String)
  async hello() {
    return "Hello, World!";
  }
  @Mutation(() => Country)
  async createCountry(@Arg("data") data: CountryInput): Promise<Country> {
    return await datasource.getRepository(Country).save(data);
  }

  @Query(() => [Country])
  async getCountries(): Promise<Country[]> {
    return await datasource.getRepository(Country).find();
  }

  @Query(() => Country)
  async getCountry(@Arg("code") code: string): Promise<Country> {
    const country = await datasource.getRepository(Country).findOneBy({ code });

    if (country === null) throw new Error("Country not found");

    return country;
  }
}
