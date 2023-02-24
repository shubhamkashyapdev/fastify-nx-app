# This file is generated by Nx.
#
# Build the docker image with `npx nx docker-build fastify-sandbox`.
# Tip: Modify "docker-build" options in project.json to change docker build args.
#
# Run the container with `docker run -p 3000:3000 -t fastify-sandbox`.
FROM docker.io/node:lts-alpine

ENV HOST=0.0.0.0
ENV PORT=3000

WORKDIR /app

RUN addgroup --system fastify-sandbox && \
          adduser --system -G fastify-sandbox fastify-sandbox

COPY dist/fastify-sandbox fastify-sandbox
RUN chown -R fastify-sandbox:fastify-sandbox .

CMD [ "node", "fastify-sandbox" ]
