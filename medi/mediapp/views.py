from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializes import *
from .models import *

class UserDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)

class DoctorOnlyView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        if request.user.role != 'doctor':
            return Response({"detail": "Not authorized"})
        return Response({"message": "Hello Doctor"})

class AppointmentView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        if request.user.role == 'doctor':
            appointments = Appointment.objects.filter(doctor=request.user)
        else:
            appointments = Appointment.objects.filter(patient=request.user)
        serializer = AppointmentSerializer(appointments, many=True)
        return Response(serializer.data)

    def post(self, request):
        if request.user.role != 'patient':
            return Response({"detail": "Only patients can book appointments."})
        data = request.data.copy()
        data['patient'] = request.user.id
        serializer = AppointmentSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,)
        return Response(serializer.errors,)


