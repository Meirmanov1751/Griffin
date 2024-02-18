from django.http import JsonResponse
from .osint.main import check_all_vulnerabilities, whois, lookup
from django.shortcuts import render
from rest_framework import mixins, viewsets
from .permissions import IsSuperAdmin, IsManagementCompany, IsCustomer, IsExecutive, IsForMany
from .models import Osint, Source
from .serializers import OsintSerializer, OsintListSerializer, SourceSerializer
from .paginations import DocumentPagination


# Create your views here.
def whoisView(request):
    data = whois(request.GET['url'])
    return JsonResponse({"whois": data})

def lookupView(request):
    data = lookup(request.GET['url'])
    return JsonResponse({"lookup": data})

def OSINTView(request):
    data = check_all_vulnerabilities(request.GET['url'])

    return JsonResponse(data)

class OsintViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, mixins.RetrieveModelMixin,
                     mixins.UpdateModelMixin, mixins.DestroyModelMixin, viewsets.GenericViewSet):
    queryset = Osint.objects.all()
    pagination_class = DocumentPagination
    serializer_class = OsintSerializer

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return OsintListSerializer
        elif self.request.method == 'POST':
            return OsintSerializer
        else:
            return OsintSerializer

    def get_permissions(self):
        if self.action == 'list':
            permission_classes = [IsForMany]
        elif self.action == 'create':
            permission_classes = [IsExecutive]
        else:
            permission_classes = [IsExecutive]
        return [permission() for permission in permission_classes]


class SourceViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, mixins.RetrieveModelMixin,
                     mixins.UpdateModelMixin, mixins.DestroyModelMixin, viewsets.GenericViewSet):
    queryset = Source.objects.all()
    pagination_class = DocumentPagination
    serializer_class = SourceSerializer