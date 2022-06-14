from django.urls import path, include
from rest_framework import routers
from . import viewsets

router = routers.DefaultRouter()
urlpatterns = [
    path('', include(router.urls)),
    path('create-payment-intent/', viewsets.PaymentIntent.as_view())
]
