import whois


def whois_check(domain):
    whois_info = whois.whois(domain)
    return whois_info



