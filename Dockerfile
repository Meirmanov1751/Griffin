FROM debian:bullseye-slim

# Add Kali Linux repositories and install desired tools/packages
RUN echo "deb http://http.kali.org/kali kali-rolling main contrib non-free" > /etc/apt/sources.list && \
    apt-get update && \
    apt-get install -y kali-linux-top10

# Other customizations if needed

CMD ["bash"]
