import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';

/* eslint-disable-next-line */
export interface UserOptions {}

export async function user(fastify: FastifyInstance, opts: UserOptions) {
  fastify.get(
    '/',
    async function (request: FastifyRequest, reply: FastifyReply) {
      return { message: 'Hello API User' };
    }
  );
}
