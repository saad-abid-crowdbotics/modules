import json
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework import permissions, status
from rest_framework.response import Response
import stripe
stripe.api_key = "sk_test_51I6B2tBZuKMpoaGSHjptnGx1uKM2UHzRpZZM93nUK35621GeKlBoVXysrthHkEMv2Le3DKS5eFL2DlpqNB7WwFVi00KplrjUpP"


class PaymentIntent (APIView):

    def post(self, request, *args, **kwargs):
        try:
            paymentIntent = stripe.PaymentIntent.create(
                amount=request.data['amount'],
                currency=request.data['currency'],
                payment_method_types=request.data['payment_method_types'])
            if paymentIntent:
                return Response({ "client_secret": paymentIntent['client_secret']}, status=status.HTTP_200_OK)
            else:
                return Response({"message": "Something went wrong."}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response(e.args, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
