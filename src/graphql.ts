// src/graphql.ts
import { request, gql } from "graphql-request";

interface Monster {
  id: string;
  monsterid: string;
  monstername: string;
  victories: string;
  defeats: string;
}

interface DataResponse {
  ranking: Monster[];
}

export const fetchData = async (): Promise<Monster[]> => {
  const endpoint = "http://localhost:3008/graphql";
  const query = gql`
    query {
      ranking {
        id
        monsterid
        monstername
        victories
        defeats
      }
    }
  `;

  try {
    const response: DataResponse = await request(endpoint, query);

    console.log("#fetchData#");
    console.log("response:" + JSON.stringify(response));
    return response?.ranking;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
