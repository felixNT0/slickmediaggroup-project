import axios, { AxiosInstance } from "axios";

type GetOptionType = {
  hasAuth: boolean;
  "Content-Type"?: string;
};
export type TErrorResponse = {
  message: string;
  success: boolean;
};

class Http {
  axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: process.env.NEXT_PUBLIC_ENDPOINT_URL,
    });
  }

  async get(url: string) {
    try {
      const response = await this.axios.get(url);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  }
}

const http = new Http();

export default http;
