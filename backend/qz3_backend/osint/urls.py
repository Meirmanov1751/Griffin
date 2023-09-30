from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import OsintViewSet

router = DefaultRouter()

router.register('osint/osint', OsintViewSet)
