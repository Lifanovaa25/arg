# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Production
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD ["npm", "run", "start"]

#docker build -t my-nextjs-app .

# docker image build -t apashintsev/royaleq:latest .
# docker run -p 3015:3000 -t -d --name royaleq apashintsev/royaleq:latest
# docker push apashintsev/royaleq