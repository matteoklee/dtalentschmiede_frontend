# Schritt 1: Build-Phase
FROM node:20 AS build

# Setze das Arbeitsverzeichnis
WORKDIR /app

# Kopiere die package.json und package-lock.json
COPY package*.json ./

# Installiere die Abhängigkeiten
RUN npm install

# Kopiere den restlichen Quellcode und baue das Projekt
COPY . .
RUN npm run build

# Schritt 2: Nginx Setup für statische Dateien
FROM nginx:alpine AS production

# Kopiere das erstellte Build aus der Build-Phase in das Nginx-Standardverzeichnis
COPY --from=build /app/dist /usr/share/nginx/html

# Expose den Nginx-Standardport
EXPOSE 80

# Standard-Nginx-Befehl zum Starten des Webservers
CMD ["nginx", "-g", "daemon off;"]
