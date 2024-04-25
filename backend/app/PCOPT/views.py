from django.shortcuts import render
from requests import Response
from rest_framework import mixins, viewsets
from .permissions import IsForMany, IsCustomer
from .models import PCOPT
from .serializers import PCOPTSerializer, PCOPTListSerializer
from .paginations import DocumentPagination


# Create your views here.
class PCOPTViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, mixins.RetrieveModelMixin,
                   mixins.UpdateModelMixin, mixins.DestroyModelMixin, viewsets.GenericViewSet):
    queryset = PCOPT.objects.all()

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return PCOPTListSerializer
        elif self.request.method == 'POST':
            return PCOPTSerializer
        else:
            return PCOPTSerializer

    def get_permissions(self):
        if self.action == 'list':
            permission_classes = [IsForMany]
        elif self.action == 'create':
            permission_classes = [IsCustomer]
        else:
            permission_classes = [IsCustomer]
        return [permission() for permission in permission_classes]
