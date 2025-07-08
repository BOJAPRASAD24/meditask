from django.contrib import admin
from .models import User, Doctor, Appointment, Review

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'role', 'email')
    search_fields = ('name', 'email', 'role')

@admin.register(Doctor)
class DoctorAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'speciality', 'availability')
    list_filter = ('availability',)

@admin.register(Appointment)
class AppointmentAdmin(admin.ModelAdmin):
    list_display = ('id', 'patient', 'doctor', 'datetime')
    list_filter = ('doctor', 'datetime')
    search_fields = ('patient__name', 'doctor__name')

@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('id', 'doctor', 'feedback')
    search_fields = ('doctor__name', 'feedback')

