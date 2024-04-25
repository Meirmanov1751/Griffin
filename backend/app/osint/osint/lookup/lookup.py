import socket


def lookup_check(hostname):
    try:
        ip_address = socket.gethostbyname(hostname)
        return f"IP-адрес для {hostname}: {ip_address}"
    except socket.gaierror as e:
        return f"Не удалось выполнить запрос для {hostname}: {e}"