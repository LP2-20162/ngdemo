'''
from django.contrib import admin
from planilla.models import Empleado, Empresa

# Register your models here.
admin.site.register(Empresa)


class EmpleadoAdmin(admin.ModelAdmin):
    list_display = ("nombres", "apellidos", "empresa")
    search_fields = ("nombres", "apellidos", "empresa__nombre")
    list_per_page = 2

admin.site.register(Empleado, EmpleadoAdmin)
'''
