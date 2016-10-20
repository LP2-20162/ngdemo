from rest_framework import serializers, viewsets
from planilla.models import Empleado


class EmpleadoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Empleado
        fields = '__all__'
        #fields = ('url', 'username', 'email', 'is_staff')


class EmpleadoViewSet(viewsets.ModelViewSet):
    queryset = Empleado.objects.all()
    serializer_class = EmpleadoSerializer
