from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import PCOPTViewSet

router = DefaultRouter()

router.register('PCOPT', PCOPTViewSet)
