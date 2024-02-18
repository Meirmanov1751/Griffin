from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import OsintViewSet, SourceViewSet, whoisView, lookupView

router = DefaultRouter()

urlpatterns = [
    path("whois/", whoisView),
    path("lookup/", lookupView),

]

router.register('osint/osint', OsintViewSet)
router.register('osint/source', SourceViewSet)
