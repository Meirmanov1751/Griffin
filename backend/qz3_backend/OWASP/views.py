from django.shortcuts import render
from rest_framework import mixins, viewsets

from .models import AuthenticationViolation, AccessControlViolation, XXEViolation, SensitiveDataExposure, Injection, \
    SecurityMisconfiguration, KnownVulnerabilities, InsecureDeserializationAttack, XSSAttack, SecurityLogging
from .paginations import DocumentPagination
from .permissions import IsForMany
from .serializers import AuthenticationViolationSerializer, AccessControlViolationSerializer, XXEViolationSerializer, \
    SensitiveDataExposureSerializer, InjectionSerializer, SecurityMisconfigurationSerializer, \
    KnownVulnerabilitiesSerializer, InsecureDeserializationAttackSerializer, XSSAttackSerializer, \
    SecurityLoggingSerializer


class AuthenticationViolationViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, mixins.RetrieveModelMixin,
                                     mixins.UpdateModelMixin, mixins.DestroyModelMixin, viewsets.GenericViewSet):
    queryset = AuthenticationViolation.objects.all()
    pagination_class = DocumentPagination
    serializer_class = AuthenticationViolationSerializer
    permission_classes = [IsForMany]


# Создаем вьюсет для модели AccessControlViolation
class AccessControlViolationViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, mixins.RetrieveModelMixin,
                                    mixins.UpdateModelMixin, mixins.DestroyModelMixin, viewsets.GenericViewSet):
    queryset = AccessControlViolation.objects.all()
    pagination_class = DocumentPagination
    serializer_class = AccessControlViolationSerializer
    permission_classes = [IsForMany]


# Создаем вьюсет для модели XXEViolation
class XXEViolationViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, mixins.RetrieveModelMixin,
                          mixins.UpdateModelMixin, mixins.DestroyModelMixin, viewsets.GenericViewSet):
    queryset = XXEViolation.objects.all()
    pagination_class = DocumentPagination
    serializer_class = XXEViolationSerializer
    permission_classes = [IsForMany]


# Продолжаем создавать вьюсеты аналогично для остальных моделей...

# Создаем вьюсет для модели SecurityLogging
class SecurityLoggingViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, mixins.RetrieveModelMixin,
                             mixins.UpdateModelMixin, mixins.DestroyModelMixin, viewsets.GenericViewSet):
    queryset = SecurityLogging.objects.all()
    pagination_class = DocumentPagination
    serializer_class = SecurityLoggingSerializer
    permission_classes = [IsForMany]


class InjectionViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, mixins.RetrieveModelMixin,
                       mixins.UpdateModelMixin, mixins.DestroyModelMixin, viewsets.GenericViewSet):
    queryset = Injection.objects.all()
    pagination_class = DocumentPagination
    serializer_class = InjectionSerializer
    permission_classes = [IsForMany]


# Создаем вьюсет для модели SecurityMisconfiguration
class SecurityMisconfigurationViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, mixins.RetrieveModelMixin,
                                      mixins.UpdateModelMixin, mixins.DestroyModelMixin, viewsets.GenericViewSet):
    queryset = SecurityMisconfiguration.objects.all()
    pagination_class = DocumentPagination
    serializer_class = SecurityMisconfigurationSerializer
    permission_classes = [IsForMany]


# Продолжаем создавать вьюсеты аналогично для остальных моделей...

# Создаем вьюсет для модели XSSAttack
class XSSAttackViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, mixins.RetrieveModelMixin,
                       mixins.UpdateModelMixin, mixins.DestroyModelMixin, viewsets.GenericViewSet):
    queryset = XSSAttack.objects.all()
    pagination_class = DocumentPagination
    serializer_class = XSSAttackSerializer
    permission_classes = [IsForMany]


# Создаем вьюсет для модели KnownVulnerabilities
class KnownVulnerabilitiesViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, mixins.RetrieveModelMixin,
                                  mixins.UpdateModelMixin, mixins.DestroyModelMixin, viewsets.GenericViewSet):
    queryset = KnownVulnerabilities.objects.all()
    pagination_class = DocumentPagination
    serializer_class = KnownVulnerabilitiesSerializer
    permission_classes = [IsForMany]


# Создаем вьюсет для модели InsecureDeserializationAttack
class InsecureDeserializationAttackViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, mixins.RetrieveModelMixin,
                                           mixins.UpdateModelMixin, mixins.DestroyModelMixin, viewsets.GenericViewSet):
    queryset = InsecureDeserializationAttack.objects.all()
    pagination_class = DocumentPagination
    serializer_class = InsecureDeserializationAttackSerializer
    permission_classes = [IsForMany]


# Создаем вьюсет для модели SecurityLogging
class SensitiveDataExposureViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, mixins.RetrieveModelMixin,
                             mixins.UpdateModelMixin, mixins.DestroyModelMixin, viewsets.GenericViewSet):
    queryset = SensitiveDataExposure.objects.all()
    pagination_class = DocumentPagination
    serializer_class = SensitiveDataExposureSerializer
    permission_classes = [IsForMany]
