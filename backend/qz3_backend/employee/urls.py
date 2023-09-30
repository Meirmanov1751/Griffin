from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import EmployeeViewSet

router = DefaultRouter()

router.register('employee/employee', EmployeeViewSet)
