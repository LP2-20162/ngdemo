from django.conf.urls import url, include
from rest_framework import routers

from .views import EmpleadoViewSet

router = routers.DefaultRouter()
router.register(r'empleados', EmpleadoViewSet)


urlpatterns = [
    url(r'^', include(router.urls)),
]
