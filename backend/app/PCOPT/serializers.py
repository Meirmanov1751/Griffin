from rest_framework import serializers

from customer.serializers import CustomerSerializer
from .models import PCOPT


class PCOPTListSerializer(serializers.ModelSerializer):

    class Meta:
        model = PCOPT
        fields = '__all__'


class PCOPTSerializer(serializers.ModelSerializer):

    class Meta:
        model = PCOPT
        fields = '__all__'
