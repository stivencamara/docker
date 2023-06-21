FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS runtime
WORKDIR /api
COPY /content .

ENV ASPNETCORE_URLS=http://*:5003
ENV ASPNETCORE_ENVIRONMENT=Production

# EXPOSE 5003

# ENTRYPOINT ["dotnet", "CES.API.dll"]

ENV ASPNETCORE_URLS=https://*:443
ENV ASPNETCORE_HTTPS_PORT=443
ENV ASPNETCORE_ENVIRONMENT=Production

# Copia o certificado SSL (arquivo .pfx) para o contêiner
COPY /certs/qld-api-ces.pfx /app/qld-api-ces.pfx

# Expõe a porta 443 para acesso externo
EXPOSE 443

# Executa o serviço com suporte a HTTPS
ENTRYPOINT ["dotnet", "CES.API.dll", "--urls", "https://0.0.0.0:443", "--cert", "/app/qld-api-ces.pfx", "--password", "P@ssw0rd"]