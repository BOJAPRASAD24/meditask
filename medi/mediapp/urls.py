from django.urls import path
from .views import *
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/user/', UserDetailView.as_view(), name='user_detail'),
    path('api/appointments/', AppointmentView.as_view(), name='appointments'),
    path('api/doctor-only/', DoctorOnlyView.as_view(), name='doctor_only'),
]

