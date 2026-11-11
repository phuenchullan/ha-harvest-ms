FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:22-alpine AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build && npm prune --omit=dev

FROM node:22-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup -S hap && adduser -S hap -G hap
COPY --from=build --chown=hap:hap /app/node_modules ./node_modules
COPY --from=build --chown=hap:hap /app/dist ./dist
COPY --from=build --chown=hap:hap /app/package.json ./
USER hap
CMD ["node", "dist/main.js"]
