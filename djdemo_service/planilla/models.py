from django.db import models

# Create your models here.


class Empresa(models.Model):

    nombre = models.CharField(max_length=60)
    siglas = models.CharField(
        max_length=15,
        blank=True, null=True
    )

    class Meta:
        verbose_name = "Empresa"
        verbose_name_plural = "Empresas"

    def __str__(self):
        return self.nombre


class Empleado(models.Model):

    nombres = models.CharField(max_length=60)
    apellidos = models.CharField(
        max_length=60,
        blank=True, null=True
    )
    empresa = models.ForeignKey('Empresa',
                                blank=True, null=True)

    class Meta:
        verbose_name = "Empleado"
        verbose_name_plural = "Empleados"

    def __str__(self):
        return self.nombres
