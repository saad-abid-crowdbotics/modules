from django.urls import re_path, path
from .viewsets import PaymentSheetView, GetStripePaymentsView, GetPaymentMethodsView, StripeSettingView

urlpatterns = [
    re_path(r'payment_sheet/?', PaymentSheetView.as_view()),
    re_path(r'get_payments_history/?', GetStripePaymentsView.as_view()),
    re_path(r'get_payments_methods/?', GetPaymentMethodsView.as_view()),
    path('stripe-settings/', StripeSettingView.as_view())
]
