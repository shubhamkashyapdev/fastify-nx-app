import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { user } from '@fastify-sandbox/modules/user';
import { post } from '@fastify-sandbox/modules/post';
/* eslint-disable-next-line */
export interface AppOptions {}

export async function app(fastify: FastifyInstance, opts: AppOptions) {
  fastify.get(
    '/',
    async function (request: FastifyRequest, reply: FastifyReply) {
      return { message: 'Hello API From Docker' };
    }
  );
  fastify.register(user, { prefix: 'user' });
  fastify.register(post, { prefix: 'post' });
}
