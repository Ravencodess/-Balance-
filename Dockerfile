# Stage 1: Building the code
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Add pnpm to the image
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the code
COPY . .

# Build the application
RUN pnpm build

# Stage 2: Run the application
FROM node:18-alpine AS runner

WORKDIR /app

RUN apk add curl

# Add pnpm to the image
RUN npm install -g pnpm

# Copy necessary files from builder
COPY --from=builder /app/next.config.js ./
# COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json

# Install only production dependencies
RUN pnpm install --prod

# Set environment variables
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD HOSTNAME="0.0.0.0" pnpm start