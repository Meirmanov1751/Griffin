from .lookup.lookup import lookup_check
from .whois.whois import whois_check
from .xss.xss import check_xss
from .csrf.csrf import check_csrf
from .sql_injection.sql_injection import check_sql_injection
from .clickjacking.clickjacking import check_clickjacking
from .open_ports.open_ports import check_open_ports
from .info.info import check_info

def whois(url):
    print(f'Барлық осалдықтарды тексеру {url}...')
    return whois_check(url)


def lookup(url):
    print(f'Барлық осалдықтарды тексеру {url}...')
    return lookup_check(url)

def check_all_vulnerabilities(url):
    print(f'Барлық осалдықтарды тексеру {url}...')

    return {
        "xss": check_xss(url),
        "info": check_info(url),
        "csrf": check_csrf(url),
        "clickjacking": check_clickjacking(url),
        "sql_injection": check_sql_injection(url)
    }


