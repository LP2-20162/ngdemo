from django.contrib import admin
from planilla.models import User, Empleado, Empresa, Area

admin.site.register(User)

# Register your models here.
admin.site.register(Empresa)


class AreaAdmin(admin.ModelAdmin):
    list_display = ("nombre", "empresa",)
admin.site.register(Area, AreaAdmin)


class EmpleadoAdmin(admin.ModelAdmin):
    list_display = ("nombres", "apellidos",)
    search_fields = ("nombres", "apellidos",)
    list_per_page = 2

admin.site.register(Empleado, EmpleadoAdmin)
