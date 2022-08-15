from django.urls import path
from .views import RegisterAPI, login_api

urlpatterns = [
    path('register/', RegisterAPI.as_view(), name="register"),
    path('login/', login_api),
]
