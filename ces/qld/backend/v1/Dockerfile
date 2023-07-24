FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /api
COPY ./content .

COPY ./certs/qld-api-ces.pfx /usr/local/share/ca-certificates/qld-api-ces.pfx

ENV ASPNETCORE_URLS=https://*:443;http://*:80
ENV ASPNETCORE_HTTP_PORT=80
ENV ASPNETCORE_HTTPS_PORT=443
ENV ASPNETCORE_Kestrel__Certificates__Default__Password=P@ssw0rd
ENV ASPNETCORE_Kestrel__Certificates__Default__Path=/usr/local/share/ca-certificates/qld-api-ces.pfx
#ENV ASPNETCORE_ENVIRONMENT=Production

RUN ["apt-get", "update"]
RUN ["apt-get", "install", "-y", "nano"]
RUN update-ca-certificates

EXPOSE 80
EXPOSE 443

ENTRYPOINT ["dotnet", "CES.API.dll","--cert", "/usr/local/share/ca-certificates/qld-api-ces.pfx", "--password", "P@ssw0rd"]
