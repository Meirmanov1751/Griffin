from django.contrib import admin
from .models import Osint, Source


# Register your models here.
admin.site.register(Osint)
admin.site.register(Source)
