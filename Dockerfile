# Stage 1: Build the React application
FROM node:20-alpine AS builder

WORKDIR /app

# Update Alpine packages to patched versions
RUN apk update && apk upgrade --no-cache

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source and build
COPY . .
RUN npm run build


# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Update Alpine packages to patched versions
RUN apk update && apk upgrade --no-cache

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
