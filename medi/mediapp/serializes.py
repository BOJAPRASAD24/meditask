from rest_framework import serializers
from .models import User, Doctor, Appointment, Review

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'role', 'email']

class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = ['id', 'name', 'speciality', 'availability']

class AppointmentSerializer(serializers.ModelSerializer):
    patient_name = serializers.StringRelatedField(source='patient.name', read_only=True)
    doctor_name = serializers.StringRelatedField(source='doctor.name', read_only=True)

    class Meta:
        model = Appointment
        fields = ['id', 'patient', 'patient_name', 'doctor', 'doctor_name', 'datetime']

class ReviewSerializer(serializers.ModelSerializer):
    doctor_name = serializers.StringRelatedField(source='doctor.name', read_only=True)

    class Meta:
        model = Review
        fields = ['id', 'doctor', 'doctor_name', 'feedback']
