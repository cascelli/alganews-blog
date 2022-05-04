import Service from "danielbonifacio-sdk/dist/Service";

// Usando variavel de ambiente para determinar valores
const { API_BASE_URL } = process.env;

// Ajustando a base URL da API no danielbonifacio-sdk
if (API_BASE_URL) Service.setBaseUrl(API_BASE_URL);
