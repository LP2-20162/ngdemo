from rest_framework import serializers, viewsets
from planilla.models import Empleado
#from rest_framework import permissions


class EmpleadoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Empleado
        fields = '__all__'
        #fields = ('url', 'username', 'email', 'is_staff')


class EmpleadoViewSet(viewsets.ModelViewSet):
    queryset = Empleado.objects.all()
    serializer_class = EmpleadoSerializer
    #permission_classes = [permissions.IsAuthenticated]
