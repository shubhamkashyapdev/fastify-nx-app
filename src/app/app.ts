import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';

/* eslint-disable-next-line */
export interface AppOptions {}

export async function app(fastify: FastifyInstance, opts: AppOptions) {
  fastify.get(
    '/',
    async function (request: FastifyRequest, reply: FastifyReply) {
      return { message: 'Hello API' };
    }
  );
}
