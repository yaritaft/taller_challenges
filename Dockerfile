FROM node:14.5.0
#Create app directory
WORKDIR /app
COPY package*.json ./
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .
CMD ["npm","test"]