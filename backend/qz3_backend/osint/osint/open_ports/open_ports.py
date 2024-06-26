import socket


def check_open_ports(url):
    try:
        ip = socket.gethostbyname(url)
        portsmass = []
        for port in range(1, 68):
            sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            sock.settimeout(1)
            result = sock.connect_ex((ip, port))
            if result == 0:
                print(f'Port {port} ашық {url}')
                print('Осалдық пайызы: 100%')
                portsmass.append({"text": port})
            else:
                print(f'Port {port} жабық{url}')
                print('Осалдық пайызы: 0%')
                portsmass.append({"text": port})
        return portsmass
    except socket.gaierror as e:
        print(f'Қате орын алды: {url}')
        print(f'Қате орын алды: {e}')
