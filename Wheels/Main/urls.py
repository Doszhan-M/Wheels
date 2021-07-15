from django.urls import path
from Main.views import index


urlpatterns = [
    path('', index, name='index'),
    ]