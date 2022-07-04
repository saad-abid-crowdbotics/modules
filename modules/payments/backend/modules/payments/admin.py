from django.contrib import admin
from .models import StripeUserProfile, StripeSetting

admin.site.register(StripeUserProfile)
admin.site.register(StripeSetting)
