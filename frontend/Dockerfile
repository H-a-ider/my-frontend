FROM node:20.9.0

WORKDIR /app/frontend 

COPY package*.json ./

RUN npm install

RUN npm install date-fns

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "dev"]
 
